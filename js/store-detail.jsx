// StoreDetailDrawer — shows all invoices for a single store, with stats

const StoreDetail = ({ open, store, onClose, allStores }) => {
  const toast = useToast();
  const [search, setSearch] = React.useState('');
  const [yearFilter, setYearFilter] = React.useState('all');
  const [preview, setPreview] = React.useState(null);

  if (!store) return null;

  const records = HISTORY.filter((h) => h.storeId === store.id);
  const years = [...new Set(records.map((h) => h.yearMonth.slice(0, 4)))].sort().reverse();

  const fmtMonthRange = (h) => {
    if (h.months && h.months.length > 1) {
      const first = h.months[0].yearMonth;
      const last = h.months[h.months.length - 1].yearMonth;
      return `${fmtYM_jp(first)}～${fmtYM_jp(last)}`;
    }
    if (h.months && h.months.length === 1) return fmtYM_jp(h.months[0].yearMonth);
    return fmtYM_jp(h.yearMonth);
  };

  const filtered = records.filter((h) => {
    if (yearFilter !== 'all' && !h.yearMonth.startsWith(yearFilter)) return false;
    if (search && !h.invoiceNo.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const totalAmount = records.reduce((s, h) => s + h.amountIncTax, 0);
  const last = records[0];

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        width={1100}
        title={null}
        headerExtra={null}
      >
        {/* Custom header */}
        <div style={{
          padding: '24px 28px 20px',
          background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
          color: '#fff',
          position: 'relative',
        }}>
          <button onClick={onClose} style={{
            position: 'absolute', top: 16, right: 16, width: 32, height: 32,
            border: 'none', background: 'rgba(255,255,255,0.15)', borderRadius: 6,
            color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Icon name="close" size={18} color="#fff" />
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{
              width: 56, height: 56, borderRadius: 12, background: 'rgba(255,255,255,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              fontSize: 22, fontWeight: 700, letterSpacing: '0.05em',
            }}>
              {store.code}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>{store.shortName}</div>
              <div style={{ fontSize: 13, opacity: 0.85, fontFamily: 'var(--font-jp)' }}>{store.companyName}</div>
            </div>
          </div>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: 32, marginTop: 24, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
            <div>
              <div style={{ fontSize: 11, opacity: 0.7, marginBottom: 4 }}>累计请求书</div>
              <div style={{ fontSize: 24, fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{records.length} <span style={{ fontSize: 13, opacity: 0.7, fontWeight: 500 }}>份</span></div>
            </div>
            <div>
              <div style={{ fontSize: 11, opacity: 0.7, marginBottom: 4 }}>累计金额（含税）</div>
              <div style={{ fontSize: 24, fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{fmtYen(totalAmount)}</div>
            </div>
            <div>
              <div style={{ fontSize: 11, opacity: 0.7, marginBottom: 4 }}>最近请求书</div>
              <div style={{ fontSize: 14, fontWeight: 500, fontFamily: 'var(--font-mono)' }}>{last ? last.invoiceNo : '—'}</div>
              <div style={{ fontSize: 11, opacity: 0.7, marginTop: 2 }}>{last ? last.generatedAt : ''}</div>
            </div>
            <div>
              <div style={{ fontSize: 11, opacity: 0.7, marginBottom: 4 }}>创建日期</div>
              <div style={{ fontSize: 14, fontWeight: 500, fontFamily: 'var(--font-mono)' }}>{store.createdAt}</div>
            </div>
          </div>
        </div>

        {/* Filter bar */}
        <div style={{ padding: '16px 28px', borderBottom: '1px solid var(--border)', background: '#F8FAFC' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ position: 'relative', width: 280 }}>
              <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }}>
                <Icon name="search" size={14} color="var(--text-tertiary)" />
              </span>
              <input className="input" style={{ paddingLeft: 34 }} placeholder="搜索请求书编号"
                value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div style={{ display: 'flex', gap: 4, padding: 4, background: '#fff', border: '1px solid var(--border)', borderRadius: 6 }}>
              <button
                onClick={() => setYearFilter('all')}
                style={tabBtn(yearFilter === 'all')}>
                全部
              </button>
              {years.map((y) => (
                <button key={y} onClick={() => setYearFilter(y)} style={tabBtn(yearFilter === y)}>
                  {y}年
                </button>
              ))}
            </div>
            <div style={{ marginLeft: 'auto', fontSize: 12, color: 'var(--text-secondary)' }}>
              共 <strong className="num" style={{ color: 'var(--text-primary)' }}>{filtered.length}</strong> 条
            </div>
            <button className="btn btn-secondary btn-sm"
              disabled={filtered.length === 0}
              onClick={() => {
                window.printInvoices(filtered.map((h) => ({
                  storeId: h.storeId, invoiceNo: h.invoiceNo,
                  issueDate: h.issueDate, yearMonth: h.yearMonth,
                  itemName: h.itemName || `業務委託サービス料（${fmtYM_jp(h.yearMonth)}）`,
                  amount: h.amountIncTax,
                  months: h.months || null,
                })));
              }}>
              <Icon name="download" size={13} /> 全部下载
            </button>
          </div>
        </div>

        {/* Invoice list */}
        <div style={{ padding: '0', maxHeight: 'calc(90vh - 280px)', overflow: 'auto' }}>
          {filtered.length === 0 ? (
            <Empty title="该店铺暂无请求书记录" body="可在请求书生成页为此店铺开具请求书" />
          ) : (
            <table className="tbl">
              <thead>
                <tr>
                  <th style={{ width: 200 }}>请求书编号</th>
                  <th style={{ width: 160 }}>业务月份</th>
                  <th style={{ width: 140, textAlign: 'right' }}>含税金额</th>
                  <th style={{ width: 130 }}>请求日</th>
                  <th style={{ width: 170 }}>生成时间</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((h) => (
                  <tr key={h.id}>
                    <td className="num" style={{ fontWeight: 500 }}>{h.invoiceNo}</td>
                    <td>{fmtMonthRange(h)}</td>
                    <td className="amt-cell" style={{ fontWeight: 500 }}>{fmtYen(h.amountIncTax)}</td>
                    <td className="num" style={{ color: 'var(--text-secondary)' }}>{h.issueDate}</td>
                    <td className="num" style={{ color: 'var(--text-secondary)' }}>{h.generatedAt}</td>
                    <td>
                      <div style={{ display: 'flex', gap: 2 }}>
                        <button className="btn btn-ghost btn-sm" onClick={() => setPreview({ ...h, store })}>
                          <Icon name="eye" size={13} /> 预览
                        </button>
                        <button className="btn btn-ghost btn-sm" onClick={() => {
                          window.printInvoices([{
                            storeId: h.storeId, invoiceNo: h.invoiceNo,
                            issueDate: h.issueDate, yearMonth: h.yearMonth,
                            itemName: h.itemName || `業務委託サービス料（${fmtYM_jp(h.yearMonth)}）`,
                            amount: h.amountIncTax,
                            months: h.months || null,
                          }]);
                        }}>
                          <Icon name="download" size={13} /> 下载
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </Modal>

      <Modal
        open={!!preview}
        onClose={() => setPreview(null)}
        title="请求书预览"
        width={920}
        headerExtra={
          <button className="btn btn-primary btn-sm" onClick={() => {
            if (preview) {
              window.printInvoices([{
                storeId: preview.storeId, invoiceNo: preview.invoiceNo,
                issueDate: preview.issueDate, yearMonth: preview.yearMonth,
                itemName: preview.itemName || `業務委託サービス料（${fmtYM_jp(preview.yearMonth)}）`,
                amount: preview.amountIncTax,
                months: preview.months || null,
              }]);
            }
            setPreview(null);
          }}>
            <Icon name="download" size={14} /> 下载 PDF
          </button>
        }>
        {preview && (
          <div style={{ padding: 32, background: 'linear-gradient(180deg, #F8FAFC 0%, #EEF2F7 100%)' }}>
            <InvoicePDF
              store={preview.store}
              invoiceNo={preview.invoiceNo}
              issueDate={preview.issueDate}
              yearMonth={preview.yearMonth}
              itemName={preview.itemName || `業務委託サービス料（${fmtYM_jp(preview.yearMonth)}）`}
              amountIncTax={preview.amountIncTax}
              months={preview.months || null}
            />
          </div>
        )}
      </Modal>
    </>
  );
};

const tabBtn = (active) => ({
  height: 28, padding: '0 12px', border: 'none', borderRadius: 4,
  background: active ? 'var(--primary-500)' : 'transparent',
  color: active ? '#fff' : 'var(--text-secondary)',
  fontSize: 12, fontWeight: active ? 600 : 500, cursor: 'pointer',
  transition: 'all 150ms',
});

window.StoreDetail = StoreDetail;
