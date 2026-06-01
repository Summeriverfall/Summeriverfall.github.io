// Page C: History

const PageHistory = ({ stores, history }) => {
  const toast = useToast();
  const [startMonth, setStartMonth] = React.useState('2026-01');
  const [endMonth, setEndMonth] = React.useState('2026-05');
  const [storeFilter, setStoreFilter] = React.useState(stores.map((s) => s.id));
  const [search, setSearch] = React.useState('');
  const [preview, setPreview] = React.useState(null);
  const [editor, setEditor] = React.useState(null);

  const records = history.filter((h) => {
    if (h.yearMonth < startMonth || h.yearMonth > endMonth) return false;
    if (!storeFilter.includes(h.storeId)) return false;
    if (search) {
      const s = stores.find((x) => x.id === h.storeId);
      const ok = h.invoiceNo.toLowerCase().includes(search.toLowerCase()) || s.shortName.toLowerCase().includes(search.toLowerCase());
      if (!ok) return false;
    }
    return true;
  });

  const thisMonthRecords = history.filter((h) => h.generatedAt.startsWith('2026-04'));
  const thisMonthCount = thisMonthRecords.length;
  const thisMonthTotal = thisMonthRecords.reduce((s, h) => s + h.amountIncTax, 0);
  const lastMonthCount = history.filter((h) => h.generatedAt.startsWith('2026-03')).length;

  const fmtMonthRange = (h) => {
    if (h.months && h.months.length > 1) {
      const first = h.months[0].yearMonth;
      const last = h.months[h.months.length - 1].yearMonth;
      return `${fmtYM_jp(first)}～${fmtYM_jp(last)}`;
    }
    if (h.months && h.months.length === 1) return fmtYM_jp(h.months[0].yearMonth);
    return fmtYM_jp(h.yearMonth);
  };

  const handlePrintSingle = (h) => {
    const store = stores.find((x) => x.id === h.storeId);
    const hasMonths = h.months && h.months.length > 0;
    window.printInvoices([{
      storeId: h.storeId, invoiceNo: h.invoiceNo,
      issueDate: h.issueDate, yearMonth: h.yearMonth,
      itemName: h.itemName || `業務委託サービス料（${fmtYM_jp(h.yearMonth)}）`,
      amount: h.amountIncTax,
      months: hasMonths ? h.months : null,
      receiverName: h.receiverName,
      quantity: h.quantity, taxRate: h.taxRate ?? 0.1,
      taxMethod: h.taxMethod || 'round', showSeal: h.showSeal !== false,
      variant: h.variant || 'final',
    }]);
    toast.push(`正在打印 ${h.invoiceNo}.pdf`, 'info');
  };

  const handleExportZip = () => {
    if (records.length === 0) return;
    window.printInvoices(records.map((h) => {
      const store = stores.find((x) => x.id === h.storeId);
      const hasMonths = h.months && h.months.length > 0;
      return {
        storeId: h.storeId, invoiceNo: h.invoiceNo,
        issueDate: h.issueDate, yearMonth: h.yearMonth,
        itemName: h.itemName || `業務委託サービス料（${fmtYM_jp(h.yearMonth)}）`,
        amount: h.amountIncTax,
        months: hasMonths ? h.months : null,
        receiverName: h.receiverName,
        quantity: h.quantity, taxRate: h.taxRate ?? 0.1,
        taxMethod: h.taxMethod || 'round', showSeal: h.showSeal !== false,
        variant: h.variant || 'final',
      };
    }));
    toast.push(`正在打印 ${records.length} 份请求书 — 在打印对话框中选择「另存为 PDF」即可`, 'info');
  };

  return (
    <div className="fade-in" data-screen-label="03 History">
      <div style={{ marginBottom: 20 }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0, marginBottom: 6 }}>历史记录</h1>
        <div style={{ fontSize: 14, color: 'var(--text-secondary)' }}>查询和回看已生成的请求书</div>
      </div>

      <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
        <div className="card stat-card">
          <div className="stat-label">本月已生成</div>
          <div className="stat-value">{thisMonthCount} <span style={{ fontSize: 16, color: 'var(--text-secondary)', fontWeight: 500 }}>份</span></div>
          <div className="stat-sub">较上月 {thisMonthCount >= lastMonthCount ? '+' : ''}{thisMonthCount - lastMonthCount}</div>
        </div>
        <div className="card stat-card">
          <div className="stat-label">本月总金额</div>
          <div className="stat-value">{fmtYen(thisMonthTotal)}</div>
          <div className="stat-sub">含税合计</div>
        </div>
        <div className="card stat-card">
          <div className="stat-label">累计请求书</div>
          <div className="stat-value">{history.length} <span style={{ fontSize: 16, color: 'var(--text-secondary)', fontWeight: 500 }}>份</span></div>
          <div className="stat-sub">自系统启用</div>
        </div>
      </div>

      <div className="card" style={{ padding: 16, marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 6 }}>开始月份</div>
            <MonthPicker value={startMonth} onChange={setStartMonth} width={160} />
          </div>
          <div style={{ paddingBottom: 8, color: 'var(--text-tertiary)' }}>—</div>
          <div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 6 }}>结束月份</div>
            <MonthPicker value={endMonth} onChange={setEndMonth} width={160} />
          </div>
          <div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 6 }}>店铺</div>
            <MultiStoreSelect stores={stores} selected={storeFilter} onChange={setStoreFilter} width={280} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 6 }}>搜索</div>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }}>
                <Icon name="search" size={14} color="var(--text-tertiary)" />
              </span>
              <input className="input" style={{ paddingLeft: 34 }} placeholder="编号或店铺名" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
          </div>
          <button className="btn btn-secondary" onClick={handleExportZip} disabled={records.length === 0}>
            <Icon name="package" size={14} /> 打印筛选结果
          </button>
        </div>
      </div>

      <div className="card" style={{ overflow: 'hidden' }}>
        {records.length === 0 ? (
          <Empty title="没有匹配的记录" body="尝试调整筛选条件或月份范围" />
        ) : (
          <table className="tbl">
            <thead>
              <tr>
                <th style={{ width: 200 }}>请求书编号</th>
                <th style={{ width: 160 }}>店铺</th>
                <th style={{ width: 120 }}>业务月份</th>
                <th style={{ width: 140, textAlign: 'right' }}>含税金额</th>
                <th style={{ width: 130 }}>请求日</th>
                <th style={{ width: 170 }}>生成时间</th>
                <th style={{ width: 240 }}>操作</th>
              </tr>
            </thead>
            <tbody>
              {records.map((h) => {
                const s = stores.find((x) => x.id === h.storeId);
                return (
                  <tr key={h.id}>
                    <td className="num" style={{ fontWeight: 500 }}>{h.invoiceNo}</td>
                    <td>{s ? s.shortName : '—'}</td>
                    <td>{fmtMonthRange(h)}</td>
                    <td className="amt-cell" style={{ fontWeight: 500 }}>{fmtYen(h.amountIncTax)}</td>
                    <td className="num" style={{ color: 'var(--text-secondary)' }}>{h.issueDate}</td>
                    <td className="num" style={{ color: 'var(--text-secondary)' }}>{h.generatedAt}</td>
                    <td>
                      <div style={{ display: 'flex', gap: 2 }}>
                        <button className="btn btn-ghost btn-sm" onClick={() => setEditor({ ...h, store: s })}>
                          <Icon name="edit" size={13} /> 编辑
                        </button>
                        <button className="btn btn-ghost btn-sm" onClick={() => setPreview({ ...h, store: s })}>
                          <Icon name="eye" size={13} /> 预览
                        </button>
                        <button className="btn btn-ghost btn-sm" onClick={() => handlePrintSingle(h)}>
                          <Icon name="download" size={13} /> 下载
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      <Modal
        open={!!preview} onClose={() => setPreview(null)}
        title="请求书预览" width={920}
        headerExtra={
          <button className="btn btn-primary btn-sm" onClick={() => { if (preview) { handlePrintSingle(preview); setPreview(null); } }}>
            <Icon name="download" size={14} /> 打印 PDF
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
      <InvoiceEditor
        open={!!editor}
        onClose={() => setEditor(null)}
        stores={stores}
        initial={editor ? {
          storeId: editor.storeId,
          invoiceNo: editor.invoiceNo,
          issueDate: editor.issueDate,
          yearMonth: editor.yearMonth,
          itemName: editor.itemName || `業務委託サービス料（${fmtYM_jp(editor.yearMonth)}）`,
          amount: editor.amountIncTax,
          months: editor.months && editor.months.length > 0
            ? editor.months
            : [{ yearMonth: editor.yearMonth, amount: editor.amountIncTax }],
          quantity: editor.quantity || '1式',
          taxRate: editor.taxRate ?? 0.1,
          taxMethod: editor.taxMethod || 'round',
          taxNote: editor.taxNote || '',
          showSeal: editor.showSeal !== false,
          variant: editor.variant || 'final',
          status: 'generated',
        } : null}
        onSave={() => toast.push('草稿已保存', 'success')}
        onGenerate={(data) => {
          setEditor(null);
          const invNo = data.invoiceNo || editor.invoiceNo;
          const monthsArr = data.months ? data.months.filter((m) => m.amount > 0) : [];
          window.printInvoices([{
            storeId: data.storeId, invoiceNo: invNo,
            issueDate: data.issueDate, yearMonth: data.yearMonth,
            itemName: data.itemName, amount: data.amount,
            months: monthsArr.length > 0 ? monthsArr : null,
            receiverName: data.receiverName, quantity: data.quantity,
            taxRate: data.taxRate, taxMethod: data.taxMethod,
            showSeal: data.showSeal, variant: data.variant,
          }]);
          toast.push(`正在打印 ${invNo}.pdf`, 'info');
        }}
      />
    </div>
  );
};

window.PageHistory = PageHistory;
