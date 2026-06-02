// Shared components: Toast, Modal, Drawer, Checkbox, MonthPicker, MultiStoreSelect, DatePicker

// ---- Toast manager ----
const ToastCtx = React.createContext({ push: () => {} });
const ToastProvider = ({ children }) => {
  const [items, setItems] = React.useState([]);
  const push = React.useCallback((msg, kind = 'success') => {
    const id = Math.random().toString(36).slice(2);
    setItems((l) => [...l, { id, msg, kind }]);
    setTimeout(() => setItems((l) => l.filter((x) => x.id !== id)), 3000);
  }, []);
  return (
    <ToastCtx.Provider value={{ push }}>
      {children}
      <div className="toast-wrap">
        {items.map((t) => (
          <div key={t.id} className={`toast ${t.kind}`}>
            <Icon name={t.kind === 'success' ? 'check' : t.kind === 'error' ? 'alert' : 'info'}
                  size={16}
                  color={t.kind === 'success' ? '#16A34A' : t.kind === 'error' ? '#DC2626' : t.kind === 'warning' ? '#F59E0B' : '#1E40AF'} />
            <span>{t.msg}</span>
          </div>
        ))}
      </div>
    </ToastCtx.Provider>
  );
};
const useToast = () => React.useContext(ToastCtx);

// ---- Checkbox ----
const Checkbox = ({ checked, indeterminate, onChange, disabled }) => (
  <span
    className={`ck ${checked ? 'checked' : ''} ${indeterminate && !checked ? 'indeterminate' : ''}`}
    style={{ opacity: disabled ? 0.4 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}
    onClick={(e) => { e.stopPropagation(); if (!disabled) onChange?.(!checked); }}
  />
);

// ---- Modal ----
const Modal = ({ open, onClose, width = 600, children, title, footer, headerExtra }) => {
  React.useEffect(() => {
    if (!open) return;
    const fn = (e) => { if (e.key === 'Escape') onClose?.(); };
    document.addEventListener('keydown', fn);
    return () => document.removeEventListener('keydown', fn);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="modal-mask" onClick={onClose}>
      <div className="modal" style={{ width }} onClick={(e) => e.stopPropagation()}>
        {(title || headerExtra) && (
          <div style={{ height: 56, padding: '0 20px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
            <div style={{ fontSize: 16, fontWeight: 600 }}>{title}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {headerExtra}
              <button className="btn btn-ghost" style={{ width: 32, padding: 0, color: 'var(--text-secondary)' }} onClick={onClose}>
                <Icon name="close" size={18} />
              </button>
            </div>
          </div>
        )}
        <div style={{ flex: 1, overflow: 'auto' }}>{children}</div>
        {footer && (
          <div style={{ height: 64, padding: '0 20px', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8, flexShrink: 0 }}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

// ---- Drawer ----
const Drawer = ({ open, onClose, title, children, footer }) => {
  if (!open) return null;
  return (
    <>
      <div className="drawer-mask" onClick={onClose} />
      <div className="drawer">
        <div style={{ height: 56, padding: '0 20px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 16, fontWeight: 600 }}>{title}</div>
          <button className="btn btn-ghost" style={{ width: 32, padding: 0, color: 'var(--text-secondary)' }} onClick={onClose}>
            <Icon name="close" size={18} />
          </button>
        </div>
        <div style={{ flex: 1, overflow: 'auto', padding: 20 }}>{children}</div>
        {footer && (
          <div style={{ height: 64, padding: '0 20px', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8 }}>
            {footer}
          </div>
        )}
      </div>
    </>
  );
};

// ---- MonthPicker ----
const MonthPicker = ({ value, onChange, width = 200 }) => {
  const [open, setOpen] = React.useState(false);
  const wrap = React.useRef(null);
  React.useEffect(() => {
    const fn = (e) => { if (wrap.current && !wrap.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);
  const months = recentMonths(24);
  return (
    <div ref={wrap} style={{ position: 'relative', width }}>
      <button
        className="input"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'left', cursor: 'pointer' }}
        onClick={() => setOpen((o) => !o)}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Icon name="calendar" size={14} color="var(--text-tertiary)" />
          {fmtYM_jp(value)}
        </span>
        <Icon name="chevron" size={14} color="var(--text-tertiary)" />
      </button>
      {open && (
        <div className="pop" style={{ top: 40, left: 0, width: '100%', padding: 4 }}>
          {months.map((m) => (
            <div key={m} className="pop-item" onClick={() => { onChange(m); setOpen(false); }}
                 style={{ background: m === value ? 'var(--primary-50)' : undefined, color: m === value ? 'var(--primary-500)' : undefined, fontWeight: m === value ? 500 : 400, borderRadius: 4 }}>
              {fmtYM_jp(m)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ---- MultiStoreSelect ----
const MultiStoreSelect = ({ stores, selected, onChange, width = 360 }) => {
  const [open, setOpen] = React.useState(false);
  const [q, setQ] = React.useState('');
  const wrap = React.useRef(null);
  React.useEffect(() => {
    const fn = (e) => { if (wrap.current && !wrap.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);
  const filtered = stores.filter((s) => !q || s.shortName.toLowerCase().includes(q.toLowerCase()) || s.code.toLowerCase().includes(q.toLowerCase()) || s.companyName.toLowerCase().includes(q.toLowerCase()));
  const allSel = selected.length === stores.length;
  const toggle = (id) => {
    onChange(selected.includes(id) ? selected.filter((x) => x !== id) : [...selected, id]);
  };
  const toggleAll = () => onChange(allSel ? [] : stores.map((s) => s.id));
  return (
    <div ref={wrap} style={{ position: 'relative', width }}>
      <button
        className="input"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'left', cursor: 'pointer' }}
        onClick={() => setOpen((o) => !o)}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 8, overflow: 'hidden' }}>
          <Icon name="store" size={14} color="var(--text-tertiary)" />
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {selected.length === 0 ? <span style={{ color: 'var(--text-tertiary)' }}>选择店铺</span> :
             selected.length === stores.length ? '全部店铺' :
             `已选 ${selected.length} 家`}
          </span>
        </span>
        <Icon name="chevron" size={14} color="var(--text-tertiary)" />
      </button>
      {open && (
        <div className="pop" style={{ top: 40, left: 0, width: '100%' }}>
          <div style={{ padding: 8, borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, background: '#fff' }}>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)' }}>
                <Icon name="search" size={14} color="var(--text-tertiary)" />
              </span>
              <input className="input" style={{ height: 32, paddingLeft: 32 }} placeholder="搜索店名/缩写" value={q} onChange={(e) => setQ(e.target.value)} />
            </div>
          </div>
          <div className="pop-item" onClick={toggleAll} style={{ fontWeight: 500, borderBottom: '1px solid var(--border)' }}>
            <Checkbox checked={allSel} indeterminate={selected.length > 0 && !allSel} onChange={toggleAll} />
            <span>全选</span>
          </div>
          {filtered.map((s) => (
            <div key={s.id} className="pop-item" onClick={() => toggle(s.id)}>
              <Checkbox checked={selected.includes(s.id)} onChange={() => toggle(s.id)} />
              <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.shortName}</span>
              <span className="num" style={{ fontSize: 11, padding: '1px 6px', background: '#F1F5F9', color: 'var(--text-secondary)', borderRadius: 3 }}>{s.code}</span>
            </div>
          ))}
          {filtered.length === 0 && <div style={{ padding: 24, textAlign: 'center', color: 'var(--text-tertiary)', fontSize: 13 }}>未找到匹配</div>}
        </div>
      )}
    </div>
  );
};

// ---- DateInput (simple) ----
const DateInput = ({ value, onChange, width = '100%' }) => {
  // value is ISO yyyy-mm-dd
  return (
    <div style={{ position: 'relative', width }}>
      <input
        type="date"
        className="text-input-cell"
        style={{ paddingRight: 4 }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        min="2020-01-01"
      />
    </div>
  );
};

// ---- ConfirmDialog ----
const Confirm = ({ open, title, body, confirmText = '确认', cancelText = '取消', danger, onConfirm, onCancel }) => (
  <Modal open={open} onClose={onCancel} title={title} width={440}
    footer={<>
      <button className="btn btn-secondary" onClick={onCancel}>{cancelText}</button>
      <button className={`btn ${danger ? 'btn-danger' : 'btn-primary'}`} onClick={onConfirm}>{confirmText}</button>
    </>}>
    <div style={{ padding: 24, fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{body}</div>
  </Modal>
);

// ---- Empty state ----
const Empty = ({ title, body, cta }) => (
  <div style={{ padding: '60px 24px', textAlign: 'center' }}>
    <div style={{ width: 200, height: 160, margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="160" height="120" viewBox="0 0 160 120" fill="none">
        <rect x="30" y="20" width="100" height="80" rx="6" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1.5"/>
        <rect x="44" y="36" width="60" height="6" rx="2" fill="#CBD5E1"/>
        <rect x="44" y="50" width="72" height="4" rx="2" fill="#E2E8F0"/>
        <rect x="44" y="60" width="50" height="4" rx="2" fill="#E2E8F0"/>
        <rect x="44" y="72" width="60" height="4" rx="2" fill="#E2E8F0"/>
        <circle cx="120" cy="92" r="14" fill="#fff" stroke="#CBD5E1" strokeWidth="1.5"/>
        <path d="M115 92 L119 96 L126 88" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    </div>
    <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 6 }}>{title}</div>
    {body && <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 20 }}>{body}</div>}
    {cta}
  </div>
);

Object.assign(window, { ToastProvider, useToast, Checkbox, Modal, Drawer, MonthPicker, MultiStoreSelect, DateInput, Confirm, Empty });
