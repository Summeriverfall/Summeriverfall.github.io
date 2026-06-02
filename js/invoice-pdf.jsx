// Invoice PDF preview — 1:1 reproduction of the actual exported PDF.
// Structured as horizontal bands separated by full-width rules.
// Supports both single-month (yearMonth+amountIncTax) and multi-month (months array).

const InvoicePDF = ({
  store,
  invoiceNo,
  issueDate,
  yearMonth,
  itemName,
  amountIncTax,
  receiverName,
  quantity = '1式',
  taxRate = 0.1,
  taxMethod = 'round',
  showSeal = true,
  variant = 'final',
  months, // new: [{yearMonth, amount}, ...]
}) => {
  // Normalize: build months array from either months prop or single yearMonth+amountIncTax
  const monthEntries = (months && months.length > 0)
    ? months
    : [{ yearMonth: yearMonth || lastMonth(), amount: amountIncTax || 0 }];

  const totalAmount = monthEntries.reduce((s, m) => s + (m.amount || 0), 0);
  const { exc, tax } = calcTax(totalAmount, taxRate, taxMethod);
  const issueDateObj = issueDate ? new Date(issueDate) : TODAY;
  const yen = (n) => '¥' + (n || 0).toLocaleString('en-US');
  const num = (n) => (n || 0).toLocaleString('en-US');
  const receiver = receiverName ?? (store ? store.companyName : '');
  const VAR = variant === 'template' ? '#C00000' : '#000';
  const nMonths = monthEntries.length;

  // Strip any existing month suffix from itemName so we can re-add per row
  const baseItemName = (itemName || '業務委託サービス料').replace(/（\d{4}年\d{1,2}月）$/, '');

  // Month range label for title area
  const firstYM = monthEntries[0].yearMonth;
  const lastYM = monthEntries[nMonths - 1].yearMonth;
  const monthLabel = nMonths === 1
    ? fmtYM_jp(firstYM)
    : `${fmtYM_jp(firstYM)}～${fmtYM_jp(lastYM)}`;

  // Unified font stack
  const JP_FONT = `'Microsoft YaHei','微软雅黑','Noto Sans JP','Yu Gothic','PingFang SC',sans-serif`;

  const bandStyle = {
    padding: '12px 18px',
    borderBottom: '1px solid #000',
    fontFamily: JP_FONT,
    fontSize: 12,
    lineHeight: 1.7,
  };
  const labelStyle = { fontWeight: 700 };

  return (
    <div className="pdf-paper" style={{ fontFamily: JP_FONT, color: '#000', padding: '48px 48px 60px' }}>
      <div style={{ border: '1px solid #000' }}>

        {/* === BAND 1: Title === */}
        <div style={{
          padding: '14px 0',
          borderBottom: '1px solid #000',
          textAlign: 'center',
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: '0.45em',
          paddingLeft: '0.45em',
        }}>
          請 求 書　兼　領 収 書
        </div>

        {/* === BAND 2: Top section — receiver + invoice meta + seal + company info === */}
        <div style={{ ...bandStyle, padding: '16px 18px 18px', position: 'relative' }}>
          {/* Row A: receiver (left) + invoice No (right) */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
            <div style={{ fontSize: 14, color: VAR, fontWeight: 500, lineHeight: 1.5 }}>
              {receiver}<span style={{ marginLeft: 6 }}>御中</span>
            </div>
            <div style={{ fontSize: 12, color: VAR, fontWeight: 500, textAlign: 'right' }}>
              請求書No.{invoiceNo}
            </div>
          </div>

          {/* Row B: month range / 請求日 (right) */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
            <div style={{ fontSize: 14, color: VAR, fontWeight: 500 }}>
              {nMonths > 1 ? `対象期間：${monthLabel}` : `${monthLabel}分`}
            </div>
            <div style={{ fontSize: 12, color: VAR, fontWeight: 500 }}>
              請求日：{fmtJpDate(issueDateObj)}
            </div>
          </div>

          {/* Row C: seal (right, ABOVE company info) */}
          {showSeal && (
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 4, paddingRight: 4 }}>
              <img src={(typeof window !== 'undefined' && window.__resources && window.__resources.seal) || 'assets/seal.png'} alt="seal" style={{ width: 54, height: 54, objectFit: 'contain' }} />
            </div>
          )}

          {/* Row D: company info (right-aligned, BELOW seal) */}
          <div style={{ textAlign: 'right', fontSize: 12, lineHeight: 1.7, paddingRight: 4 }}>
            <div style={{ fontWeight: 700 }}>{COMPANY.name}</div>
            <div>{COMPANY.address}</div>
          </div>
        </div>

        {/* === BAND 3: 請求金額(消費税込) === */}
        <div style={{
          ...bandStyle,
          padding: '14px 18px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{ fontSize: 15, fontWeight: 700 }}>請求金額(消費税込)</div>
          <div style={{ fontSize: 16, fontWeight: 700, color: VAR }}>{yen(totalAmount)}</div>
        </div>

        {/* === BAND 4: Item table === */}
        <table style={{ width: '100%', borderCollapse: 'collapse', borderBottom: '1px solid #000' }}>
          <colgroup>
            <col style={{ width: '52%' }} />
            <col style={{ width: '20%' }} />
            <col style={{ width: '28%' }} />
          </colgroup>
          <thead>
            <tr style={{ background: '#E7E6E6' }}>
              <th style={{ ...tableCell, fontWeight: 700, borderRight: '1px solid #000' }}>案件名</th>
              <th style={{ ...tableCell, fontWeight: 700, borderRight: '1px solid #000' }}>数量</th>
              <th style={{ ...tableCell, fontWeight: 700 }}>金額</th>
            </tr>
          </thead>
          <tbody>
            {monthEntries.map((m, idx) => (
              <tr key={m.yearMonth} style={{ borderTop: idx === 0 ? '1px solid #000' : undefined }}>
                <td style={{ ...tableCell, color: VAR, borderRight: '1px solid #000', textAlign: 'center' }}>
                  {`${baseItemName}（${fmtYM_jp(m.yearMonth)}）`}
                </td>
                <td style={{ ...tableCell, borderRight: '1px solid #000' }}>{quantity}</td>
                <td style={{ ...tableCell, textAlign: 'right', color: VAR, paddingRight: 14 }}>{num(m.amount)}</td>
              </tr>
            ))}
            {/* spacer rows if less than 3 months */}
            {nMonths < 3 && Array.from({ length: 3 - nMonths }).map((_, i) => (
              <tr key={'spacer-' + i} style={{ borderTop: '1px solid #000' }}>
                <td style={{ ...tableCell, borderRight: '1px solid #000', height: 26 }}>&nbsp;</td>
                <td style={{ ...tableCell, borderRight: '1px solid #000' }}>&nbsp;</td>
                <td style={{ ...tableCell }}>&nbsp;</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* === BAND 5: Subtotal sub-table (right side) === */}
        <table style={{ width: '100%', borderCollapse: 'collapse', borderBottom: '1px solid #000' }}>
          <colgroup>
            <col style={{ width: '34%' }} />
            <col style={{ width: '38%' }} />
            <col style={{ width: '28%' }} />
          </colgroup>
          <tbody>
            <tr>
              <td style={{ borderRight: '1px solid #000', padding: 0 }}>&nbsp;</td>
              <td style={{ ...tableCell, borderRight: '1px solid #000', textAlign: 'center', fontWeight: 700 }}>
                ①Total {nMonths} times (税抜)
              </td>
              <td style={{ ...tableCell, textAlign: 'right', color: VAR, paddingRight: 14, fontWeight: 700 }}>{yen(exc)}</td>
            </tr>
            <tr style={{ borderTop: '1px solid #000' }}>
              <td style={{ borderRight: '1px solid #000', padding: 0 }}>&nbsp;</td>
              <td style={{ ...tableCell, borderRight: '1px solid #000', textAlign: 'center', fontWeight: 700 }}>②消費税 (上記の{Math.round(taxRate * 100)}%)</td>
              <td style={{ ...tableCell, textAlign: 'right', color: VAR, paddingRight: 14, fontWeight: 700 }}>{yen(tax)}</td>
            </tr>
            <tr style={{ borderTop: '1px solid #000' }}>
              <td style={{ borderRight: '1px solid #000', padding: 0 }}>&nbsp;</td>
              <td style={{ ...tableCell, borderRight: '1px solid #000', textAlign: 'center', fontWeight: 700 }}>請求額(①＋②)</td>
              <td style={{ ...tableCell, textAlign: 'right', color: VAR, paddingRight: 14, fontWeight: 700 }}>{yen(totalAmount)}</td>
            </tr>
          </tbody>
        </table>

        {/* === BAND 6: Transfer instructions + bank info === */}
        <div style={{ ...bandStyle, padding: '14px 18px 16px', lineHeight: 1.85 }}>
          <div>＊お振込みは、下記の口座までお願いいたします。</div>
          <div>なお、振込手数料はご負担いただきますよう、お願い申し上げます。</div>
          <div style={{ height: 10 }} />
          <div style={{ ...labelStyle }}>〈お振込先〉</div>
          <div>
            <span style={labelStyle}>三井住友銀行</span>
            <span style={{ ...labelStyle, marginLeft: 14 }}>四条支店</span>
            <span style={{ ...labelStyle, marginLeft: 14 }}>普通口座</span>
            <span style={{ ...labelStyle, marginLeft: 14 }}>2175677</span>
          </div>
          <div>
            <span style={labelStyle}>【口座名義】</span>
            <span style={{ ...labelStyle, marginLeft: 8 }}>{COMPANY.accountName}</span>
          </div>
        </div>

        {/* === BAND 7: Footer notes + contact === */}
        <div style={{ ...bandStyle, padding: '14px 18px 18px', lineHeight: 1.85, borderBottom: 'none' }}>
          <div>なお、本領収書は、銀行振込の完了をもって有効とさせていただきます。本件についてのお問い合わせは、下記の担当者までお願いいたします。</div>
          <div style={{ height: 10 }} />
          <div>
            <span style={labelStyle}>〈担当者〉　{COMPANY.contactName}</span>
          </div>
          <div>
            <span style={labelStyle}>TEL: {COMPANY.contactTel}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

const tableCell = {
  padding: '10px 12px',
  fontSize: 12,
  textAlign: 'center',
  verticalAlign: 'middle',
  fontFamily: `'Microsoft YaHei','微软雅黑','Noto Sans JP','Yu Gothic','PingFang SC',sans-serif`,
};

window.InvoicePDF = InvoicePDF;
