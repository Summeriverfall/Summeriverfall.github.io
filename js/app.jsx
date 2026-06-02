// App shell — sidebar nav + top bar + page router

const TWEAKS_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentColor": "#1E40AF",
  "navWidth": 220,
  "compactRows": false
}/*EDITMODE-END*/;

const App = () => {
  // ----- auth gate -----
  React.useEffect(() => {
    if (!localStorage.getItem('auth_token')) {
      localStorage.setItem('auth_token', 'demo-token');
      localStorage.setItem('auth_user', JSON.stringify({ name: '朱逸骁', email: 'eason@kaipu.jp', role: '运营' }));
    }
  }, []);

  const [authUser, setAuthUser] = React.useState(() => {
    const token = localStorage.getItem('auth_token');
    if (!token) return { name: '朱逸骁', email: 'eason@kaipu.jp', role: '运营' };
    try { return JSON.parse(localStorage.getItem('auth_user') || 'null') || { name: '朱逸骁', email: 'eason@kaipu.jp', role: '运营' }; }
    catch { return { name: '朱逸骁', email: 'eason@kaipu.jp', role: '运营' }; }
  });

  const logout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
    window.location.href = 'login.html';
  };

  const [page, setPage] = React.useState('generate');
  const [stores, setStores] = React.useState(STORES);
  const [history, setHistory] = React.useState(HISTORY);
  const [userMenuOpen, setUserMenuOpen] = React.useState(false);
  const userMenuRef = React.useRef(null);
  React.useEffect(() => {
    const fn = (e) => { if (userMenuRef.current && !userMenuRef.current.contains(e.target)) setUserMenuOpen(false); };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  // Sync stores → global STORES array + localStorage
  React.useEffect(() => {
    const snapshot = [...stores];
    STORES.length = 0;
    STORES.push(...snapshot);
    persistStores();
  }, [stores]);

  // Sync history → global HISTORY array + localStorage
  React.useEffect(() => {
    const snapshot = [...history];
    HISTORY.length = 0;
    HISTORY.push(...snapshot);
    persistHistory();
  }, [history]);

  // ---- Real PDF print utility ----
  const storesRef = React.useRef(stores);
  storesRef.current = stores;
  React.useEffect(() => {
    window.printInvoices = (invoices) => {
      if (!invoices || invoices.length === 0) return;
      const currentStores = storesRef.current;

      const receiver = document.getElementById('print-receiver');
      if (!receiver) return;

      // Build a single React element tree — avoids multiple ReactDOM.render race in React 18
      const sheets = invoices.map((inv, i) => {
        const store = currentStores.find((s) => s.id === inv.storeId) || inv.store || { code: '???', companyName: '' };
        const hasMonths = inv.months && inv.months.length > 0;
        return React.createElement('div', { key: i, className: 'invoice-sheet' },
          React.createElement(InvoicePDF, {
            store: store,
            invoiceNo: inv.invoiceNo,
            issueDate: inv.issueDate,
            yearMonth: inv.yearMonth,
            itemName: inv.itemName || (hasMonths ? `業務委託サービス料（${fmtYM_jp(inv.months[0].yearMonth)}）` : `業務委託サービス料（${fmtYM_jp(inv.yearMonth)}）`),
            amountIncTax: inv.amountIncTax !== undefined ? inv.amountIncTax : (inv.amount || 0),
            months: inv.months || null,
            receiverName: inv.receiverName,
            quantity: inv.quantity || '1式',
            taxRate: inv.taxRate ?? 0.1,
            taxMethod: inv.taxMethod || 'round',
            showSeal: inv.showSeal !== false,
            variant: inv.variant || 'final',
          })
        );
      });

      ReactDOM.render(
        React.createElement('div', null, sheets),
        receiver
      );
      // Set PDF filename via document title
      const firstInv = invoices[0];
      const firstStore = currentStores.find((s) => s.id === firstInv.storeId) || firstInv.store || { code: '???' };
      const ym = (firstInv.yearMonth || (firstInv.months && firstInv.months[0] && firstInv.months[0].yearMonth) || '').replace('-', '');
      const origTitle = document.title;
      document.title = `${ym}_${firstStore.code}_网页引流 請求書兼領収書`;

      // React 18: callback removed, use rAF to ensure DOM commit before print
      requestAnimationFrame(() => {
        window.print();
        setTimeout(() => {
          ReactDOM.unmountComponentAtNode(receiver);
          document.title = origTitle;
        }, 2000);
      });
    };
  }, []);

  // Add history entries (called by PageGenerate after real print)
  const addHistoryEntries = React.useCallback((entries) => {
    setHistory((prev) => {
      const existing = new Set(prev.map((h) => h.invoiceNo));
      const toAdd = entries.filter((e) => !existing.has(e.invoiceNo));
      return [...toAdd, ...prev];
    });
  }, []);

  const Sidebar = (
    <aside style={{ width: 220, background: '#fff', borderRight: '1px solid var(--border)', flexShrink: 0, paddingTop: 12, display: 'flex', flexDirection: 'column' }}>
      <nav style={{ flex: 1 }}>
        <div className={`nav-item ${page === 'generate' ? 'active' : ''}`} onClick={() => setPage('generate')}>
          <Icon name="doc" size={18} /> <span>请求书生成</span>
        </div>
        <div className={`nav-item ${page === 'stores' ? 'active' : ''}`} onClick={() => setPage('stores')}>
          <Icon name="store" size={18} /> <span>店铺管理</span>
          <span style={{ marginLeft: 'auto', fontSize: 11, padding: '1px 6px', background: '#F1F5F9', color: 'var(--text-tertiary)', borderRadius: 10 }} className="num">{stores.length}</span>
        </div>
        <div className={`nav-item ${page === 'history' ? 'active' : ''}`} onClick={() => setPage('history')}>
          <Icon name="history" size={18} /> <span>历史记录</span>
          <span style={{ marginLeft: 'auto', fontSize: 11, padding: '1px 6px', background: '#F1F5F9', color: 'var(--text-tertiary)', borderRadius: 10 }} className="num">{history.length}</span>
        </div>
      </nav>
      <div style={{ padding: '12px 16px', borderTop: '1px solid var(--border)', fontSize: 12, color: 'var(--text-tertiary)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--success-500)' }} />
          <span>本地存储 · v1.0</span>
        </div>
        <div style={{ fontSize: 11, marginBottom: 8 }}>{COMPANY.name}</div>
        <a href="login.html" style={{ fontSize: 11, color: 'var(--primary-500)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
          → 查看登录页
        </a>
      </div>
    </aside>
  );

  const TopBar = (
    <header style={{
      height: 56, background: '#fff', borderBottom: '1px solid var(--border)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 24px', flexShrink: 0,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 30, height: 30, borderRadius: 7, background: 'var(--primary-500)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon name="doc" size={16} color="#fff" />
        </div>
        <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: '-0.2px' }}>请求书系统</div>
        <div style={{ fontSize: 11, color: 'var(--text-tertiary)', padding: '2px 6px', background: '#F1F5F9', borderRadius: 4, fontFamily: 'var(--font-mono)' }}>v1.0</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <button className="btn btn-ghost btn-sm" style={{ color: 'var(--text-secondary)', width: 32, padding: 0 }}>
          <Icon name="bell" size={16} />
        </button>
        <div ref={userMenuRef} style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', padding: '4px 8px', borderRadius: 6 }}
               onClick={() => setUserMenuOpen((v) => !v)}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg, #1E40AF, #60A5FA)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12, fontWeight: 600 }}>{(authUser.name || '?').slice(0, 1)}</div>
            <div style={{ fontSize: 13 }}>{authUser.name}</div>
            <Icon name="chevron" size={12} color="var(--text-tertiary)" />
          </div>
          {userMenuOpen && (
            <div className="pop" style={{ top: 44, right: 0, width: 240, padding: 6 }}>
              <div style={{ padding: '10px 12px', borderBottom: '1px solid var(--border)' }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{authUser.name}</div>
                <div style={{ fontSize: 11, color: 'var(--text-tertiary)', marginTop: 2 }}>{authUser.email}</div>
                <div style={{ marginTop: 6 }}><span className="tag tag-blue">{authUser.role || '员工'}</span></div>
              </div>
              <div className="pop-item" style={{ borderRadius: 4 }}><Icon name="user" size={14} color="var(--text-secondary)" /> 账号设置</div>
              <div className="pop-item" style={{ borderRadius: 4 }}><Icon name="settings" size={14} color="var(--text-secondary)" /> 偏好</div>
              <div style={{ borderTop: '1px solid var(--border)', margin: '4px 0' }} />
              <div className="pop-item" style={{ borderRadius: 4, color: 'var(--error-500)' }} onClick={logout}>
                <Icon name="close" size={14} color="var(--error-500)" /> 退出登录
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );

  return (
    <ToastProvider>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {TopBar}
        <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
          {Sidebar}
          <main style={{ flex: 1, overflow: 'auto', background: 'var(--bg-page)' }}>
            <div style={{ maxWidth: 1440, margin: '0 auto', padding: 24 }}>
              <div style={{ display: page === 'generate' ? 'block' : 'none' }}>
                <PageGenerate stores={stores} history={history} onHistoryAdd={addHistoryEntries} />
              </div>
              <div style={{ display: page === 'stores' ? 'block' : 'none' }}>
                <PageStores stores={stores} setStores={setStores} />
              </div>
              <div style={{ display: page === 'history' ? 'block' : 'none' }}>
                <PageHistory stores={stores} history={history} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </ToastProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
