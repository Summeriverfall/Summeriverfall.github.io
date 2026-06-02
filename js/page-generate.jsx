// Page A: Generate (default home)
// Multi-month: one row per store, months are columns in the table.
// One PDF per store covers all selected months.

const PageGenerate = ({ stores, history, onHistoryAdd }) => {
  const toast = useToast();
  const [yearMonths, setYearMonths] = React.useState([lastMonth()]);
  const [selectedIds, setSelectedIds] = React.useState(stores.map((s) => s.id));
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [preview, setPreview] = React.useState(null);
  const [editor, setEditor] = React.useState(null);
  const [batchPreview, setBatchPreview] = React.useState(false);
  const [monthPickerOpen, setMonthPickerOpen] = React.useState(false);
  const monthRef = React.useRef(null);
  React.useEffect(() => {
    const fn = (e) => { if (monthRef.current && !monthRef.current.contains(e.target)) setMonthPickerOpen(false); };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  const availableMonths = recentMonths(12);
  const sortedMonths = [...yearMonths].sort().reverse();

  const toggleMonth = (m) => {
    setYearMonths((prev) => {
      if (prev.includes(m)) {
        if (prev.length === 1) return prev;
        return prev.filter((x) => x !== m);
      }
      return [...prev, m].sort().reverse();
    });
  };

  const buildRows = () => {
    setLoading(true);
    setTimeout(() => {
      setRows((prevRows) => {
        const chosen = stores.filter((s) => selectedIds.includes(s.id));
        const newRows = [];
        chosen.forEach((s) => {
          const existing = prevRows.find((r) => r.storeId === s.id);
          const monthsData = {};
          sortedMonths.forEach((ym) => {
            if (existing && existing.monthsData && existing.monthsData[ym]) {
              monthsData[ym] = { ...existing.monthsData[ym] };
            } else {
              const baseName = s.defaultItemName || '業務委託サービス料';
              monthsData[ym] = { amountStr: '', amount: 0, error: null };
            }
          });
          const baseName = s.defaultItemName || '業務委託サービス料';
          newRows.push({
            storeId: s.id,
            issueDate: existing ? existing.issueDate : '2026-05-09',
            itemName: existing ? existing.itemName : baseName,
            quantity: existing ? existing.quantity : '1式',
            taxRate: existing ? existing.taxRate : 0.1,
            taxMethod: existing ? existing.taxMethod : 'round',
            taxNote: existing ? existing.taxNote : '',
            receiverName: existing ? existing.receiverName : undefined,
            showSeal: existing ? existing.showSeal : true,
            variant: existing ? existing.variant : 'final',
            monthsData,
            status: existing ? existing.status : 'pending',
          });
        });
        return newRows;
      });
      setLoading(false);
    }, 400);
  };

  React.useEffect(() => { buildRows(); /* eslint-disable-next-line */ }, []);

  React.useEffect(() => {
    if (rows.length > 0) buildRows();
  }, [yearMonths]);

  const parseAmount = (s) => {
    const cleaned = s.replace(/[^\d.-]/g, '');
    if (cleaned === '' || cleaned === '-') return { n: NaN, err: null };
    const n = Number(cleaned);
    if (Number.isNaN(n)) return { n: NaN, err: '请输入数字' };
    if (n <= 0) return { n: 0, err: '金额必须大于 0' };
    if (n > 99999999) return { n: 99999999, err: '金额最大 ¥99,999,999' };
    const truncated = Math.floor(n);
    return { n: truncated, err: null, wasFloat: !Number.isInteger(n) };
  };

  const setMonthAmount = (rowIdx, ym, str) => {
    setRows((rs) => rs.map((r, i) => {
      if (i !== rowIdx) return r;
      const md = { ...r.monthsData };
      if (str === '') {
        md[ym] = { amountStr: '', amount: 0, error: null };
      } else {
        const { n, err, wasFloat } = parseAmount(str);
        if (wasFloat) toast.push('金额已自动取整', 'warning');
        md[ym] = { amountStr: str.replace(/[^\d]/g, ''), amount: Number.isNaN(n) ? 0 : n, error: err };
      }
      // compute status
      const allFilled = Object.values(md).every((v) => v.amount > 0 && !v.error);
      const anyFilled = Object.values(md).some((v) => v.amount > 0 && !v.error);
      return { ...r, monthsData: md, status: allFilled ? 'filled' : (anyFilled ? 'partial' : 'pending') };
    }));
  };

  // Total amount across all stores and months
  const grandTotal = rows.reduce((s, r) => {
    return s + Object.values(r.monthsData).reduce((ss, m) => ss + (m.amount || 0), 0);
  }, 0);

  // Count stores with at least one filled month
  const filledStoreCount = rows.filter((r) =>
    Object.values(r.monthsData).some((m) => m.amount > 0 && !m.error)
  ).length;

  const pad = (n) => String(n).padStart(2, '0');
  const nowStr = () => {
    const now = new Date();
    return `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
  };

  const getMonthsArray = (row) => {
    return sortedMonths
      .filter((ym) => row.monthsData[ym] && row.monthsData[ym].amount > 0 && !row.monthsData[ym].error)
      .map((ym) => ({ yearMonth: ym, amount: row.monthsData[ym].amount }));
  };

  const generateSingle = (idx) => {
    const row = rows[idx];
    const store = stores.find((s) => s.id === row.storeId);
    const monthsArr = getMonthsArray(row);
    if (monthsArr.length === 0) return;
    const firstYM = monthsArr[0].yearMonth;
    const invoiceNo = genInvoiceNo(firstYM, store.code);

    const entry = {
      id: 'h' + Math.random().toString(36).slice(2, 10),
      invoiceNo, storeId: row.storeId,
      yearMonth: firstYM,
      months: monthsArr,
      amountIncTax: monthsArr.reduce((s, m) => s + m.amount, 0),
      issueDate: row.issueDate, itemName: row.itemName,
      receiverName: row.receiverName,
      quantity: row.quantity, taxRate: row.taxRate,
      taxMethod: row.taxMethod, showSeal: row.showSeal,
      variant: row.variant, generatedAt: nowStr(),
    };
    onHistoryAdd([entry]);

    window.printInvoices([{
      storeId: row.storeId, invoiceNo, issueDate: row.issueDate,
      itemName: row.itemName, months: monthsArr,
      receiverName: row.receiverName, quantity: row.quantity,
      taxRate: row.taxRate, taxMethod: row.taxMethod,
      showSeal: row.showSeal, variant: row.variant,
    }]);

    setRows((rs) => rs.map((r, i) => i === idx ? { ...r, status: 'done' } : r));
    toast.push(`已生成 ${invoiceNo}.pdf`, 'success');
  };

  const generateBatch = () => {
    const valid = rows.filter((r) => {
      const ma = getMonthsArray(r);
      return ma.length > 0;
    });
    if (valid.length === 0) return;

    const entries = [];
    const printItems = [];
    valid.forEach((row) => {
      const s = stores.find((x) => x.id === row.storeId);
      const monthsArr = getMonthsArray(row);
      const firstYM = monthsArr[0].yearMonth;
      const invNo = genInvoiceNo(firstYM, s.code);
      entries.push({
        id: 'h' + Math.random().toString(36).slice(2, 10),
        invoiceNo: invNo, storeId: row.storeId,
        yearMonth: firstYM,
        months: monthsArr,
        amountIncTax: monthsArr.reduce((sum, m) => sum + m.amount, 0),
        issueDate: row.issueDate, itemName: row.itemName,
        receiverName: row.receiverName,
        quantity: row.quantity, taxRate: row.taxRate,
        taxMethod: row.taxMethod, showSeal: row.showSeal,
        variant: row.variant, generatedAt: nowStr(),
      });
      printItems.push({
        storeId: row.storeId, invoiceNo: invNo,
        issueDate: row.issueDate, itemName: row.itemName,
        months: monthsArr,
        receiverName: row.receiverName, quantity: row.quantity,
        taxRate: row.taxRate, taxMethod: row.taxMethod,
        showSeal: row.showSeal, variant: row.variant,
      });
    });
    onHistoryAdd(entries);
    window.printInvoices(printItems);

    setRows((rs) => rs.map((r) => valid.some((v) => v.storeId === r.storeId) ? { ...r, status: 'done' } : r));
    toast.push(`已生成 ${entries.length} 份 PDF — 在打印对话框中选择「另存为 PDF」即可保存`, 'success');
  };

  // Get first and last yearMonth from sorted months for display
  const firstYM = sortedMonths[sortedMonths.length - 1];
  const lastYM = sortedMonths[0];

  return (
    <div className="fade-in" data-screen-label="01 Generate">
      <div style={{ marginBottom: 20 }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0, marginBottom: 6, letterSpacing: '-0.3px' }}>请求书生成</h1>
        <div style={{ fontSize: 14, color: 'var(--text-secondary)' }}>按店铺批量生成多月份日文请求书 PDF（每月一列，每店一份）</div>
      </div>

      <div className="card" style={{ padding: 16, marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 6 }}>业务月份（表格列）</div>
            <div ref={monthRef} style={{ position: 'relative' }}>
              <button
                className="input"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'left', cursor: 'pointer', width: 220 }}
                onClick={() => setMonthPickerOpen((o) => !o)}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Icon name="calendar" size={14} color="var(--text-tertiary)" />
                  {yearMonths.length === 1 ? fmtYM_jp(yearMonths[0]) : `已选 ${yearMonths.length} 个月`}
                </span>
                <Icon name="chevron" size={14} color="var(--text-tertiary)" />
              </button>
              {monthPickerOpen && (
                <div className="pop" style={{ top: 40, left: 0, width: 220, padding: 4 }}>
                  {availableMonths.map((m) => (
                    <div key={m} className="pop-item" onClick={() => toggleMonth(m)}
                         style={{ background: yearMonths.includes(m) ? 'var(--primary-50)' : undefined, borderRadius: 4 }}>
                      <Checkbox checked={yearMonths.includes(m)} onChange={() => toggleMonth(m)} />
                      <span style={{ color: yearMonths.includes(m) ? 'var(--primary-500)' : undefined, fontWeight: yearMonths.includes(m) ? 500 : 400 }}>
                        {fmtYM_jp(m)}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 6 }}>店铺</div>
            <MultiStoreSelect stores={stores} selected={selectedIds} onChange={setSelectedIds} />
          </div>
          <div style={{ alignSelf: 'flex-end' }}>
            <button className="btn btn-secondary" onClick={() => buildRows()} disabled={selectedIds.length === 0}>
              <Icon name="refresh" size={14} /> 加载店铺
            </button>
          </div>
          <div style={{ marginLeft: 'auto', alignSelf: 'flex-end', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span className="tag tag-blue">已选 {yearMonths.length} 个月 · {selectedIds.length}/{stores.length} 家</span>
          </div>
        </div>
      </div>

      <div className="card" style={{ overflow: 'hidden' }}>
        {loading ? (
          <div style={{ padding: 16 }}>
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="skeleton" style={{ height: 48, marginBottom: 8 }} />
            ))}
          </div>
        ) : rows.length === 0 ? (
          <Empty title="选择店铺后开始填写金额" body="勾选要开票的店铺和月份，然后点击「加载店铺」"
            cta={<button className="btn btn-primary" onClick={() => buildRows()}>加载店铺</button>} />
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table className="tbl" style={{ minWidth: 800 + sortedMonths.length * 150 }}>
              <thead>
                <tr>
                  <th style={{ width: 48, textAlign: 'center' }}>#</th>
                  <th style={{ width: 120 }}>店铺</th>
                  <th style={{ width: 200 }}>会社名</th>
                  <th style={{ width: 60 }}>缩写</th>
                  {sortedMonths.map((ym) => (
                    <th key={ym} style={{ width: 130, textAlign: 'right' }}>{fmtYM_jp(ym)}</th>
                  ))}
                  <th style={{ width: 120, textAlign: 'right' }}>合计含税</th>
                  <th style={{ width: 80 }}>状态</th>
                  <th style={{ width: 150 }}>操作</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => {
                  const store = stores.find((s) => s.id === row.storeId);
                  const rowTotal = Object.values(row.monthsData).reduce((s, m) => s + (m.amount || 0), 0);
                  const monthsArr = getMonthsArray(row);
                  return (
                    <tr key={row.storeId}>
                      <td style={{ textAlign: 'center', color: 'var(--text-tertiary)' }} className="num">{i + 1}</td>
                      <td><div style={{ fontWeight: 500 }}>{store.shortName}</div></td>
                      <td>
                        <div className="has-tip" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 180, color: 'var(--text-secondary)' }}>
                          {store.companyName}
                          <span className="tip">{store.companyName}</span>
                        </div>
                      </td>
                      <td><span className="num" style={{ fontSize: 12, padding: '2px 8px', background: '#F1F5F9', color: 'var(--text-secondary)', borderRadius: 4, fontWeight: 500 }}>{store.code}</span></td>
                      {sortedMonths.map((ym) => {
                        const md = row.monthsData[ym] || { amountStr: '', amount: 0, error: null };
                        return (
                          <td key={ym}>
                            <div className="num-wrap">
                              <span className="yen-prefix">¥</span>
                              <input
                                className={`num-input ${md.error ? 'error' : ''}`}
                                placeholder="0"
                                value={md.amountStr || ''}
                                onChange={(e) => setMonthAmount(i, ym, e.target.value)}
                              />
                            </div>
                          </td>
                        );
                      })}
                      <td className="amt-cell" style={{ fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                        {rowTotal > 0 ? fmtYen(rowTotal) : <span style={{ color: 'var(--text-tertiary)' }}>—</span>}
                      </td>
                      <td>
                        {row.status === 'generating' ? <span className="tag tag-yellow">生成中…</span> :
                         row.status === 'done' ? <span className="tag tag-green">已生成</span> :
                         row.status === 'filled' ? <span className="tag tag-blue">待生成</span> :
                         row.status === 'partial' ? <span className="tag tag-orange">部分填写</span> :
                         <span className="tag tag-gray">待填金额</span>}
                      </td>
                      <td>
                        <div style={{ display: 'flex', gap: 2 }}>
                          <button className="btn btn-ghost btn-sm" style={{ padding: '0 6px' }}
                            onClick={() => setEditor({ ...row, store, monthsArr })}>
                            <Icon name="edit" size={13} /> 编辑
                          </button>
                          <button className="btn btn-ghost btn-sm" style={{ padding: '0 6px' }}
                            onClick={() => {
                              const ma = getMonthsArray(row);
                              const invNo = genInvoiceNo(ma.length > 0 ? ma[0].yearMonth : sortedMonths[0], store.code);
                              setPreview({ ...row, store, invoiceNo: invNo, monthsArr: ma });
                            }}>
                            <Icon name="eye" size={13} /> 预览
                          </button>
                          <button className="btn btn-ghost btn-sm" style={{ padding: '0 6px', color: monthsArr.length === 0 ? 'var(--text-tertiary)' : 'var(--primary-500)' }}
                            disabled={monthsArr.length === 0}
                            onClick={() => generateSingle(i)}>
                            <Icon name="download" size={13} /> 生成
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {rows.length > 0 && (
          <div className="actbar">
            <div style={{ display: 'flex', gap: 32, fontSize: 13, color: 'var(--text-secondary)' }}>
              <div>共 <strong style={{ color: 'var(--text-primary)' }} className="num">{rows.length}</strong> 家店铺</div>
              <div>已填 <strong style={{ color: 'var(--text-primary)' }} className="num">{filledStoreCount}</strong> 家</div>
              <div>合计含税 <strong style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>{fmtYen(grandTotal)}</strong></div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn btn-secondary" disabled={filledStoreCount === 0} onClick={() => setBatchPreview(true)}>
                <Icon name="eye" size={14} /> 批量预览
              </button>
              <button className="btn btn-primary btn-lg" disabled={filledStoreCount === 0} onClick={generateBatch}>
                <Icon name="download" size={15} /> 批量生成 PDF ({filledStoreCount})
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Preview modal */}
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
                issueDate: preview.issueDate, itemName: preview.itemName,
                months: preview.monthsArr,
                receiverName: preview.receiverName, quantity: preview.quantity,
                taxRate: preview.taxRate, taxMethod: preview.taxMethod,
                showSeal: preview.showSeal, variant: preview.variant,
              }]);
            }
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
              itemName={preview.itemName}
              months={preview.monthsArr.length > 0 ? preview.monthsArr : sortedMonths.map((ym) => ({ yearMonth: ym, amount: 0 }))}
              receiverName={preview.receiverName}
              quantity={preview.quantity}
              taxRate={preview.taxRate}
              taxMethod={preview.taxMethod}
              showSeal={preview.showSeal}
              variant={preview.variant}
            />
          </div>
        )}
      </Modal>

      {/* Batch preview modal */}
      <Modal
        open={batchPreview}
        onClose={() => setBatchPreview(false)}
        title={`批量预览（${filledStoreCount} 份）`}
        width={920}
        headerExtra={
          <button className="btn btn-primary btn-sm" onClick={() => { setBatchPreview(false); generateBatch(); }}>
            <Icon name="download" size={14} /> 全部下载 PDF
          </button>
        }>
        <div style={{ padding: 32, background: 'linear-gradient(180deg, #F8FAFC 0%, #EEF2F7 100%)', display: 'flex', flexDirection: 'column', gap: 32 }}>
          {rows.filter((r) => Object.values(r.monthsData).some((m) => m.amount > 0 && !m.error)).map((row) => {
            const store = stores.find((s) => s.id === row.storeId);
            const ma = getMonthsArray(row);
            const invNo = genInvoiceNo(ma.length > 0 ? ma[0].yearMonth : sortedMonths[0], store.code);
            return (
              <div key={row.storeId}>
                <div style={{ fontSize: 12, color: 'var(--text-tertiary)', marginBottom: 12, fontFamily: 'var(--font-mono)' }}>
                  {invNo}.pdf
                </div>
                <InvoicePDF store={store} invoiceNo={invNo} issueDate={row.issueDate}
                  itemName={row.itemName} months={ma}
                  receiverName={row.receiverName} quantity={row.quantity}
                  taxRate={row.taxRate} taxMethod={row.taxMethod}
                  showSeal={row.showSeal} variant={row.variant} />
              </div>
            );
          })}
        </div>
      </Modal>

      <InvoiceEditor
        open={!!editor}
        onClose={() => setEditor(null)}
        stores={stores}
        initial={editor ? {
          storeId: editor.storeId,
          invoiceNo: editor.invoiceNo || genInvoiceNo(sortedMonths[0], editor.store?.code || ''),
          issueDate: editor.issueDate,
          yearMonth: sortedMonths[0],
          itemName: editor.itemName,
          amount: Object.values(editor.monthsData || {}).reduce((s, m) => s + (m.amount || 0), 0),
          months: sortedMonths.map((ym) => ({
            yearMonth: ym,
            amount: (editor.monthsData && editor.monthsData[ym]) ? editor.monthsData[ym].amount : 0,
          })),
          receiverName: editor.receiverName,
          quantity: editor.quantity || '1式',
          taxRate: editor.taxRate ?? 0.1,
          taxMethod: editor.taxMethod || 'round',
          taxNote: editor.taxNote || '',
          showSeal: editor.showSeal !== false,
          variant: editor.variant || 'final',
          status: editor.status,
        } : null}
        onSave={(data) => {
          setRows((rs) => rs.map((r) => r.storeId === data.storeId ? {
            ...r,
            issueDate: data.issueDate,
            itemName: data.itemName,
            monthsData: data.months.reduce((acc, m) => {
              acc[m.yearMonth] = { amountStr: m.amount ? String(m.amount) : '', amount: m.amount || 0, error: null };
              return acc;
            }, {}),
            receiverName: data.receiverName,
            quantity: data.quantity,
            taxRate: data.taxRate,
            taxMethod: data.taxMethod,
            taxNote: data.taxNote,
            showSeal: data.showSeal,
            variant: data.variant,
            status: data.amount > 0 ? (data.status || 'filled') : 'pending',
          } : r));
        }}
        onGenerate={(data) => {
          const store = stores.find((s) => s.id === data.storeId);
          const monthsArr = data.months.filter((m) => m.amount > 0);
          const firstYM = monthsArr.length > 0 ? monthsArr[0].yearMonth : data.yearMonth;
          const invoiceNo = data.invoiceNo || genInvoiceNo(firstYM, store.code);
          const entry = {
            id: 'h' + Math.random().toString(36).slice(2, 10),
            invoiceNo, storeId: data.storeId,
            yearMonth: firstYM,
            months: monthsArr,
            amountIncTax: monthsArr.reduce((s, m) => s + m.amount, 0),
            issueDate: data.issueDate, itemName: data.itemName,
            receiverName: data.receiverName,
            quantity: data.quantity, taxRate: data.taxRate,
            taxMethod: data.taxMethod, showSeal: data.showSeal,
            variant: data.variant, generatedAt: nowStr(),
          };
          onHistoryAdd([entry]);

          window.printInvoices([{
            storeId: data.storeId, invoiceNo,
            issueDate: data.issueDate, itemName: data.itemName,
            months: monthsArr,
            receiverName: data.receiverName, quantity: data.quantity,
            taxRate: data.taxRate, taxMethod: data.taxMethod,
            showSeal: data.showSeal, variant: data.variant,
          }]);

          setRows((rs) => rs.map((r) => r.storeId === data.storeId ? {
            ...r,
            issueDate: data.issueDate,
            itemName: data.itemName,
            monthsData: data.months.reduce((acc, m) => {
              acc[m.yearMonth] = { amountStr: m.amount ? String(m.amount) : '', amount: m.amount || 0, error: null };
              return acc;
            }, {}),
            receiverName: data.receiverName,
            quantity: data.quantity,
            taxRate: data.taxRate,
            taxMethod: data.taxMethod,
            taxNote: data.taxNote,
            showSeal: data.showSeal,
            variant: data.variant,
            status: 'done',
          } : r));
          setEditor(null);
          toast.push(`已生成 ${invoiceNo}.pdf`, 'success');
        }}
      />
    </div>
  );
};

window.PageGenerate = PageGenerate;
