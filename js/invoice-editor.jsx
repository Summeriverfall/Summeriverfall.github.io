// InvoiceEditor — full-screen modal to customize a single invoice
// Left: form with all editable fields + tax calc method + notes
// Right: live preview of the PDF reflecting all changes
// Supports multi-month invoices via months array

const Section = ({ id, title, children }) => (
  <div style={{ marginBottom: 20 }}>
    <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10, paddingBottom: 6, borderBottom: '1px solid var(--border)' }}>
      {title}
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>{children}</div>
  </div>
);

const Row = ({ label, sub, children }) => (
  <div>
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 6 }}>
      <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-primary)' }}>{label}</div>
      {sub && <div style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>{sub}</div>}
    </div>
    {children}
  </div>
);

const SegBtn = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    style={{
      flex: 1, height: 32, border: 'none', borderRadius: 5, fontSize: 12, fontWeight: active ? 600 : 400,
      background: active ? '#fff' : 'transparent', color: active ? 'var(--primary-500)' : 'var(--text-secondary)',
      boxShadow: active ? '0 1px 3px rgba(0,0,0,0.08)' : 'none', cursor: 'pointer', transition: 'all 150ms',
    }}>
    {children}
  </button>
);

const InvoiceEditor = ({ open, onClose, stores, initial, onSave, onGenerate }) => {
  const toast = useToast();
  const [data, setData] = React.useState(initial || {});
  const [activeSection, setActiveSection] = React.useState('basic');

  React.useEffect(() => {
    if (open && initial) {
      const init = { ...initial };
      // Normalize months
      if (!init.months || init.months.length === 0) {
        init.months = [{ yearMonth: init.yearMonth || lastMonth(), amount: init.amount || 0 }];
      }
      init.amount = init.months.reduce((s, m) => s + (m.amount || 0), 0);
      setData(init);
    }
  }, [open, initial]);

  if (!open) return null;

  const store = stores.find((s) => s.id === data.storeId);
  if (!store) return null;

  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));
  const totalAmount = (data.months || []).reduce((s, m) => s + (m.amount || 0), 0);
  const { exc, tax } = calcTax(totalAmount, data.taxRate ?? 0.1, data.taxMethod || 'round');
  const valid = totalAmount > 0 && totalAmount <= 99999999;

  const setMonthAmount = (idx, val) => {
    setData((d) => {
      const months = [...d.months];
      months[idx] = { ...months[idx], amount: val };
      return { ...d, months, amount: months.reduce((s, m) => s + (m.amount || 0), 0) };
    });
  };

  const addMonth = () => {
    const existing = new Set((data.months || []).map((m) => m.yearMonth));
    const available = recentMonths(24).filter((m) => !existing.has(m));
    if (available.length === 0) return;
    setData((d) => ({
      ...d,
      months: [...d.months, { yearMonth: available[0], amount: 0 }],
    }));
  };

  const removeMonth = (idx) => {
    setData((d) => {
      if (d.months.length <= 1) return d;
      const months = d.months.filter((_, i) => i !== idx);
      return { ...d, months, amount: months.reduce((s, m) => s + (m.amount || 0), 0) };
    });
  };

  const setMonthYM = (idx, ym) => {
    setData((d) => {
      const months = [...d.months];
      months[idx] = { ...months[idx], yearMonth: ym };
      return { ...d, months };
    });
  };

  // ---- form sections (defined at module level to keep stable React component references) ----


  return (
    <div className="modal-mask" onClick={onClose}>
      <div className="modal" style={{ width: 1240, height: '92vh' }} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={{ height: 56, padding: '0 20px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Icon name="edit" size={18} color="var(--primary-500)" />
            <div style={{ fontSize: 16, fontWeight: 600 }}>编辑请求书</div>
            <div className="num" style={{ fontSize: 12, color: 'var(--text-secondary)', padding: '2px 8px', background: '#F1F5F9', borderRadius: 4 }}>
              {data.invoiceNo}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button className="btn btn-secondary btn-sm" onClick={() => { onSave?.(data); toast.push('草稿已保存', 'success'); }}>
              保存草稿
            </button>
            <button className="btn btn-primary btn-sm" disabled={!valid} onClick={() => { onGenerate?.(data); }}>
              <Icon name="download" size={13} /> 生成 PDF
            </button>
            <button className="btn btn-ghost" style={{ width: 32, padding: 0, color: 'var(--text-secondary)' }} onClick={onClose}>
              <Icon name="close" size={18} />
            </button>
          </div>
        </div>

        {/* Body: form + preview */}
        <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
          {/* LEFT — form */}
          <div style={{ width: 440, borderRight: '1px solid var(--border)', display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
            {/* Section tabs */}
            <div style={{ display: 'flex', gap: 4, padding: 6, margin: 12, background: '#F1F5F9', borderRadius: 8 }}>
              <SegBtn active={activeSection === 'basic'} onClick={() => setActiveSection('basic')}>基本信息</SegBtn>
              <SegBtn active={activeSection === 'tax'} onClick={() => setActiveSection('tax')}>税额计算</SegBtn>
              <SegBtn active={activeSection === 'display'} onClick={() => setActiveSection('display')}>显示选项</SegBtn>
            </div>

            <div style={{ flex: 1, overflow: 'auto', padding: '0 20px 20px' }}>
              {activeSection === 'basic' && (
                <>
                  <Section title="收件信息">
                    <Row label="收件人（会社名）" sub={data.receiverName !== store.companyName ? '已自定义' : '默认'}>
                      <input className="input" style={{ fontFamily: 'var(--font-jp)' }}
                        value={data.receiverName ?? store.companyName}
                        onChange={(e) => set('receiverName', e.target.value)} />
                      <div style={{ marginTop: 6 }}>
                        <button className="btn btn-ghost btn-sm" style={{ padding: 0, fontSize: 11 }}
                          onClick={() => set('receiverName', store.companyName)}>
                          ↻ 重置为店铺会社名
                        </button>
                      </div>
                    </Row>
                  </Section>

                  <Section title="请求书">
                    <Row label="请求书编号">
                      <input className="input" style={{ fontFamily: 'var(--font-mono)' }}
                        value={data.invoiceNo || ''} onChange={(e) => set('invoiceNo', e.target.value)} />
                    </Row>
                    <Row label="请求日">
                      <input type="date" className="input"
                        value={data.issueDate || ''} onChange={(e) => set('issueDate', e.target.value)} />
                    </Row>
                  </Section>

                  <Section title={`明细（${(data.months || []).length} 个月）`}>
                    <Row label="数量">
                      <input className="input" style={{ fontFamily: 'var(--font-jp)', width: 120 }}
                        value={data.quantity || '1式'} onChange={(e) => set('quantity', e.target.value)} />
                    </Row>
                    <Row label="案件名">
                      <input className="input" style={{ fontFamily: 'var(--font-jp)' }}
                        value={data.itemName || ''} onChange={(e) => set('itemName', e.target.value)} />
                    </Row>

                    {/* Month-amount list */}
                    <div style={{ marginTop: 4 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                        <span style={{ fontSize: 12, fontWeight: 500 }}>各月金额</span>
                        <button className="btn btn-ghost btn-sm" style={{ padding: '0 6px', fontSize: 11 }}
                          onClick={addMonth}>
                          + 添加月份
                        </button>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {(data.months || []).map((m, idx) => (
                          <div key={idx} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                            <div style={{ width: 130, flexShrink: 0 }}>
                              <select className="select" style={{ height: 36, fontSize: 13, fontFamily: 'var(--font-jp)' }}
                                value={m.yearMonth}
                                onChange={(e) => setMonthYM(idx, e.target.value)}>
                                {recentMonths(24).map((ym) => (
                                  <option key={ym} value={ym}>{fmtYM_jp(ym)}</option>
                                ))}
                              </select>
                            </div>
                            <div style={{ flex: 1, position: 'relative' }}>
                              <span style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-tertiary)', fontSize: 13 }}>¥</span>
                              <input className="input" style={{ paddingLeft: 24, fontFamily: 'var(--font-mono)', textAlign: 'right' }}
                                value={m.amount || ''}
                                onChange={(e) => {
                                  const n = parseInt(e.target.value.replace(/[^\d]/g, ''), 10);
                                  setMonthAmount(idx, Number.isNaN(n) ? 0 : Math.min(n, 99999999));
                                }} />
                            </div>
                            <button className="btn btn-ghost btn-sm" style={{ padding: '0 4px', color: 'var(--error-500)', flexShrink: 0 }}
                              onClick={() => removeMonth(idx)}
                              disabled={(data.months || []).length <= 1}>
                              <Icon name="trash" size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Row label="含税金额合计 (¥)" sub="1 ~ 99,999,999 整数">
                      <div style={{ position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-tertiary)' }}>¥</span>
                        <div className="input" style={{
                          paddingLeft: 26, fontFamily: 'var(--font-mono)', textAlign: 'right', fontSize: 15, fontWeight: 600,
                          background: '#F8FAFC', color: 'var(--text-primary)', display: 'flex', alignItems: 'center',
                          justifyContent: 'flex-end',
                        }}>
                          {totalAmount.toLocaleString('en-US')}
                        </div>
                      </div>
                    </Row>
                  </Section>
                </>
              )}

              {activeSection === 'tax' && (
                <>
                  <Section title="税率与方式">
                    <Row label="税率">
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <input className="input" type="number" step="1" min="0" max="100" style={{ width: 100, fontFamily: 'var(--font-mono)', textAlign: 'right' }}
                          value={Math.round((data.taxRate ?? 0.1) * 100)}
                          onChange={(e) => set('taxRate', Math.max(0, Math.min(100, parseFloat(e.target.value) || 0)) / 100)} />
                        <span style={{ color: 'var(--text-secondary)', fontSize: 14 }}>%</span>
                        <button className="btn btn-ghost btn-sm" style={{ padding: '0 8px' }} onClick={() => set('taxRate', 0.1)}>10%</button>
                        <button className="btn btn-ghost btn-sm" style={{ padding: '0 8px' }} onClick={() => set('taxRate', 0.08)}>8%</button>
                      </div>
                    </Row>

                    <Row label="小数处理方式">
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        {Object.entries(TAX_METHODS).map(([key, m]) => (
                          <label key={key} style={{
                            display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px',
                            border: `1px solid ${(data.taxMethod || 'round') === key ? 'var(--primary-500)' : 'var(--border)'}`,
                            background: (data.taxMethod || 'round') === key ? 'var(--primary-50)' : '#fff',
                            borderRadius: 6, cursor: 'pointer', transition: 'all 150ms',
                          }}>
                            <input type="radio" name="tax-method" checked={(data.taxMethod || 'round') === key}
                              onChange={() => set('taxMethod', key)}
                              style={{ accentColor: 'var(--primary-500)' }} />
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: 13, fontWeight: 500 }}>{m.label}</div>
                              <div style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>{m.desc}</div>
                            </div>
                            <span className="num" style={{ fontSize: 11, padding: '2px 8px', background: 'rgba(0,0,0,0.04)', borderRadius: 3, color: 'var(--text-secondary)' }}>
                              ¥{(TAX_METHODS[key].fn(totalAmount / (1 + (data.taxRate ?? 0.1)))).toLocaleString()}
                            </span>
                          </label>
                        ))}
                      </div>
                    </Row>
                  </Section>

                  <Section title="计算结果">
                    <div style={{ background: '#F8FAFC', borderRadius: 8, padding: 14 }}>
                      <CalcRow label="含税金额（消費税込）" value={fmtYen(totalAmount)} />
                      <div style={{ borderTop: '1px dashed var(--border)', margin: '8px 0' }} />
                      <CalcRow label={`税抜 (${TAX_METHODS[data.taxMethod || 'round'].label})`} value={fmtYen(exc)} muted />
                      <CalcRow label={`消費税 (${Math.round((data.taxRate ?? 0.1) * 100)}%)`} value={fmtYen(tax)} muted />
                      <div style={{ borderTop: '1px solid var(--text-primary)', margin: '8px 0' }} />
                      <CalcRow label="合計 (税抜 + 消費税)" value={fmtYen(exc + tax)} bold />
                      <div style={{ marginTop: 10, padding: '8px 10px', background: '#fff', borderRadius: 4, fontSize: 11, color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                        {(totalAmount).toLocaleString()} ÷ {(1 + (data.taxRate ?? 0.1)).toFixed(2)} = {(totalAmount / (1 + (data.taxRate ?? 0.1))).toFixed(4)}<br/>
                        → {TAX_METHODS[data.taxMethod || 'round'].label} → {exc.toLocaleString()}
                      </div>
                    </div>
                  </Section>

                  <Section title="备注">
                    <Row label="计算说明 / 备注" sub={`${(data.taxNote || '').length}/200 · 仅内部记录`}>
                      <textarea className="input" rows={3} maxLength={200}
                        placeholder="例：本月含跨年度调整；按客户要求使用切り上げ；与对账单 Z-2026-04 对应"
                        value={data.taxNote || ''} onChange={(e) => set('taxNote', e.target.value)} />
                    </Row>
                  </Section>
                </>
              )}

              {activeSection === 'display' && (
                <>
                  <Section title="印章">
                    <Row label="显示公司印章">
                      <ToggleRow on={data.showSeal !== false} onChange={(v) => set('showSeal', v)}
                        label={data.showSeal !== false ? '显示印章' : '隐藏印章'} />
                    </Row>
                  </Section>

                  <Section title="样式">
                    <Row label="变量字段颜色">
                      <div style={{ display: 'flex', gap: 8 }}>
                        <ChoiceCard
                          selected={(data.variant || 'final') === 'final'}
                          onClick={() => set('variant', 'final')}
                          title="正式版"
                          desc="全部黑色，用于打印"
                          color="#000"
                        />
                        <ChoiceCard
                          selected={data.variant === 'template'}
                          onClick={() => set('variant', 'template')}
                          title="模板版"
                          desc="变量字段标红，便于核对"
                          color="#C00000"
                        />
                      </div>
                    </Row>
                  </Section>

                  <Section title="状态">
                    <Row label="当前状态">
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        {[
                          { v: 'draft', label: '草稿', desc: '未生成，可继续编辑', color: '#94A3B8' },
                          { v: 'ready', label: '待生成', desc: '信息齐全，等待批量生成', color: '#1E40AF' },
                          { v: 'generated', label: '已生成', desc: 'PDF 已生成并存档', color: '#16A34A' },
                          { v: 'voided', label: '已作废', desc: '保留记录但标记作废', color: '#DC2626' },
                        ].map((s) => {
                          const cur = data.status || (valid ? 'ready' : 'draft');
                          return (
                            <label key={s.v} style={{
                              display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px',
                              border: `1px solid ${cur === s.v ? s.color : 'var(--border)'}`,
                              background: cur === s.v ? `${s.color}10` : '#fff',
                              borderRadius: 6, cursor: 'pointer', transition: 'all 150ms',
                            }}>
                              <input type="radio" name="status" checked={cur === s.v}
                                onChange={() => set('status', s.v)} style={{ accentColor: s.color }} />
                              <div style={{ flex: 1 }}>
                                <div style={{ fontSize: 13, fontWeight: 500 }}>{s.label}</div>
                                <div style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>{s.desc}</div>
                              </div>
                              <span style={{ width: 8, height: 8, borderRadius: '50%', background: s.color }} />
                            </label>
                          );
                        })}
                      </div>
                    </Row>
                  </Section>
                </>
              )}
            </div>
          </div>

          {/* RIGHT — live preview */}
          <div style={{ flex: 1, background: 'linear-gradient(180deg, #F1F5F9 0%, #E2E8F0 100%)', overflow: 'auto', padding: 32 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 800, margin: '0 auto 16px' }}>
              <div style={{ fontSize: 11, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: 8 }}>
                <Icon name="eye" size={13} /> 实时预览
              </div>
              <div className="num" style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>
                {data.invoiceNo}.pdf · A4
              </div>
            </div>
            <InvoicePDF
              store={store}
              invoiceNo={data.invoiceNo}
              issueDate={data.issueDate}
              itemName={data.itemName}
              months={(data.months || []).length > 0 ? data.months : [{ yearMonth: data.yearMonth || lastMonth(), amount: data.amount || 0 }]}
              receiverName={data.receiverName}
              quantity={data.quantity}
              taxRate={data.taxRate ?? 0.1}
              taxMethod={data.taxMethod || 'round'}
              showSeal={data.showSeal !== false}
              variant={data.variant || 'final'}
            />
            {data.taxNote && (
              <div style={{ maxWidth: 800, margin: '16px auto 0', padding: 12, background: 'var(--warning-50)', border: '1px solid #FCD34D', borderRadius: 6, fontSize: 12, color: '#92400E' }}>
                <strong>备注（不会显示在 PDF 上）：</strong> {data.taxNote}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const CalcRow = ({ label, value, muted, bold }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '3px 0' }}>
    <span style={{ fontSize: 12, color: muted ? 'var(--text-secondary)' : 'var(--text-primary)', fontWeight: bold ? 600 : 400 }}>{label}</span>
    <span style={{ fontSize: bold ? 15 : 13, fontWeight: bold ? 700 : 500, fontFamily: 'var(--font-mono)', color: muted ? 'var(--text-secondary)' : 'var(--text-primary)' }}>{value}</span>
  </div>
);

const ToggleRow = ({ on, onChange, label }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', border: '1px solid var(--border)', borderRadius: 6 }}>
    <span style={{ fontSize: 13 }}>{label}</span>
    <button
      onClick={() => onChange(!on)}
      style={{
        width: 40, height: 22, border: 'none', borderRadius: 11,
        background: on ? 'var(--primary-500)' : '#CBD5E1',
        position: 'relative', cursor: 'pointer', transition: 'background 150ms',
      }}>
      <span style={{
        position: 'absolute', top: 2, left: on ? 20 : 2, width: 18, height: 18,
        borderRadius: '50%', background: '#fff', transition: 'left 150ms', boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
      }} />
    </button>
  </div>
);

const ChoiceCard = ({ selected, onClick, title, desc, color }) => (
  <button onClick={onClick} style={{
    flex: 1, padding: 12, border: `1.5px solid ${selected ? 'var(--primary-500)' : 'var(--border)'}`,
    background: selected ? 'var(--primary-50)' : '#fff', borderRadius: 8, textAlign: 'left',
    cursor: 'pointer', transition: 'all 150ms',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
      <span style={{ fontSize: 13, fontWeight: 600 }}>{title}</span>
      <span style={{ width: 16, height: 4, background: color, borderRadius: 2 }} />
    </div>
    <div style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>{desc}</div>
  </button>
);

window.InvoiceEditor = InvoiceEditor;
