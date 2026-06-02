// Minimal stroke icon set
const Icon = ({
  name,
  size = 16,
  color = 'currentColor',
  strokeWidth = 1.8,
  style
}) => {
  const s = size;
  const common = {
    width: s,
    height: s,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style
  };
  const paths = {
    doc: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 3v6h6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 13h8M8 17h6"
    })),
    store: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 9l1.5-5h15L21 9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 9v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 9h18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 13h6v8H9z"
    })),
    history: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 12a9 9 0 1 0 3-6.7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 4v5h5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 7v5l3 2"
    })),
    user: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "8",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 21a8 8 0 0 1 16 0"
    })),
    plus: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 5v14M5 12h14"
    })),
    upload: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 16V4M6 10l6-6 6 6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 20h16"
    })),
    search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m20 20-3.5-3.5"
    })),
    edit: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M11 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
    })),
    trash: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 11v6M14 11v6"
    })),
    eye: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    })),
    download: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 4v12M6 10l6 6 6-6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 20h16"
    })),
    close: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M6 6l12 12M18 6L6 18"
    })),
    check: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M5 12l5 5L20 7"
    })),
    chevron: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M6 9l6 6 6-6"
    })),
    chevronR: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M9 6l6 6-6 6"
    })),
    calendar: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "5",
      width: "18",
      height: "16",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 9h18M8 3v4M16 3v4"
    })),
    info: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 8h.01M11 12h1v5h1"
    })),
    refresh: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 12a9 9 0 0 1 15.5-6.3L21 8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 3v5h-5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 12a9 9 0 0 1-15.5 6.3L3 16"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 21v-5h5"
    })),
    chart: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 3v18h18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 16l4-4 4 4 5-7"
    })),
    yen: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M6 4l6 8 6-8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6 12h12M6 16h12M12 12v8"
    })),
    alert: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 9v4M12 17h.01"
    })),
    menu: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 6h18M3 12h18M3 18h18"
    })),
    settings: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.01A1.65 1.65 0 0 0 10 4.09V4a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V10a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
    })),
    bell: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13.7 21a2 2 0 0 1-3.4 0"
    })),
    folder: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
    })),
    package: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M16.5 9.4 7.55 4.24"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m3.27 6.96 8.73 5.05 8.73-5.05M12 22.08V12"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", common, paths[name] || null);
};
window.Icon = Icon;
;
// Mock data + helpers

const COMPANY = {
  name: 'カイプ株式会社',
  address: '京都市東山区石泉院町 394-4-201',
  bank: '三井住友銀行  四条支店  普通口座 2175677',
  accountName: 'カイプ株式会社',
  contactName: 'オウガクキ',
  contactTel: '070-9270-8795'
};
const DEFAULT_STORES = [{
  id: 's1',
  shortName: 'starry',
  companyName: 'Starry Flow Spa スタリーフロースパ',
  code: 'STA',
  defaultItemName: '業務委託サービス料',
  remark: '',
  createdAt: '2024-08-12'
}, {
  id: 's2',
  shortName: 'エフアイ株式会社',
  companyName: 'エフアイ株式会社',
  code: 'FI',
  defaultItemName: '業務委託サービス料',
  remark: '',
  createdAt: '2024-09-03'
}, {
  id: 's3',
  shortName: 'FUTUREKART Osaka',
  companyName: '株式会社未来方程',
  code: 'FUT',
  defaultItemName: '業務委託サービス料',
  remark: '大阪エリア',
  createdAt: '2024-10-15'
}, {
  id: 's4',
  shortName: 'LUNA SPA',
  companyName: 'LUNA SPA',
  code: 'LUN',
  defaultItemName: '業務委託サービス料',
  remark: '',
  createdAt: '2024-11-01'
}, {
  id: 's5',
  shortName: 'SELENE SPA',
  companyName: '（広源商貿）㍿',
  code: 'SEL',
  defaultItemName: '業務委託サービス料',
  remark: '',
  createdAt: '2025-01-09'
}, {
  id: 's6',
  shortName: 'celestiquespa',
  companyName: 'STEPHANIE 株式会社',
  code: 'CEL',
  defaultItemName: '業務委託サービス料',
  remark: '',
  createdAt: '2025-02-22'
}, {
  id: 's7',
  shortName: '花の色',
  companyName: '花の色　リラクゼーション',
  code: 'HAN',
  defaultItemName: '業務委託サービス料',
  remark: '',
  createdAt: '2025-03-18'
}, {
  id: 's8',
  shortName: '花香(KAKO)',
  companyName: '花香(KAKO) Relaxation Salon',
  code: 'KAK',
  defaultItemName: '業務委託サービス料',
  remark: '',
  createdAt: '2025-04-05'
}];
const DEFAULT_HISTORY = [{
  id: 'h12',
  invoiceNo: '202603-STA-01',
  storeId: 's1',
  yearMonth: '2026-03',
  issueDate: '2026-04-04',
  amountIncTax: 128000,
  generatedAt: '2026-04-04 10:23'
}, {
  id: 'h11',
  invoiceNo: '202603-FI-01',
  storeId: 's2',
  yearMonth: '2026-03',
  issueDate: '2026-04-04',
  amountIncTax: 96500,
  generatedAt: '2026-04-04 10:23'
}, {
  id: 'h10',
  invoiceNo: '202603-FUT-01',
  storeId: 's3',
  yearMonth: '2026-03',
  issueDate: '2026-04-04',
  amountIncTax: 215000,
  generatedAt: '2026-04-04 10:23'
}, {
  id: 'h9',
  invoiceNo: '202603-LUN-01',
  storeId: 's4',
  yearMonth: '2026-03',
  issueDate: '2026-04-04',
  amountIncTax: 78000,
  generatedAt: '2026-04-04 10:23'
}, {
  id: 'h8',
  invoiceNo: '202603-SEL-01',
  storeId: 's5',
  yearMonth: '2026-03',
  issueDate: '2026-04-04',
  amountIncTax: 102000,
  generatedAt: '2026-04-04 10:24'
}, {
  id: 'h7',
  invoiceNo: '202603-CEL-01',
  storeId: 's6',
  yearMonth: '2026-03',
  issueDate: '2026-04-04',
  amountIncTax: 88500,
  generatedAt: '2026-04-04 10:24'
}, {
  id: 'h6',
  invoiceNo: '202603-HAN-01',
  storeId: 's7',
  yearMonth: '2026-03',
  issueDate: '2026-04-04',
  amountIncTax: 64000,
  generatedAt: '2026-04-04 10:24'
}, {
  id: 'h5',
  invoiceNo: '202603-KAK-01',
  storeId: 's8',
  yearMonth: '2026-03',
  issueDate: '2026-04-04',
  amountIncTax: 78000,
  generatedAt: '2026-04-04 10:24'
}, {
  id: 'h4',
  invoiceNo: '202602-STA-01',
  storeId: 's1',
  yearMonth: '2026-02',
  issueDate: '2026-03-03',
  amountIncTax: 112000,
  generatedAt: '2026-03-03 09:12'
}, {
  id: 'h3',
  invoiceNo: '202602-FUT-01',
  storeId: 's3',
  yearMonth: '2026-02',
  issueDate: '2026-03-03',
  amountIncTax: 198000,
  generatedAt: '2026-03-03 09:12'
}, {
  id: 'h2',
  invoiceNo: '202602-LUN-01',
  storeId: 's4',
  yearMonth: '2026-02',
  issueDate: '2026-03-03',
  amountIncTax: 71000,
  generatedAt: '2026-03-03 09:13'
}, {
  id: 'h1',
  invoiceNo: '202602-CEL-01',
  storeId: 's6',
  yearMonth: '2026-02',
  issueDate: '2026-03-03',
  amountIncTax: 91000,
  generatedAt: '2026-03-03 09:13'
}];

// ---- localStorage persistence ----
const loadFromLS = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    if (raw) {
      const data = JSON.parse(raw);
      if (Array.isArray(data) && data.length === 0) return [...fallback]; // empty arrays are likely corruption
      return data;
    }
  } catch (e) {/* ignore corrupt data */}
  return [...fallback]; // return copy so DEFAULT_STORES is never mutated
};
const saveToLS = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {/* quota exceeded */}
};
const STORES = loadFromLS('invoice_stores', DEFAULT_STORES);
let HISTORY = loadFromLS('invoice_history', DEFAULT_HISTORY);
const persistStores = () => saveToLS('invoice_stores', STORES);
const persistHistory = () => saveToLS('invoice_history', HISTORY);

// ---- helpers ----
const TODAY = new Date(2026, 4, 9); // 2026-05-09 fixed for prototype determinism
const fmtYen = n => '¥' + (n || 0).toLocaleString('en-US');
const fmtYM_jp = ym => {
  const [y, m] = ym.split('-');
  return `${y}年${parseInt(m, 10)}月`;
};
const fmtJpDate = d => `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
const fmtJpDateStr = s => {
  const d = new Date(s);
  return fmtJpDate(d);
};
const TAX_METHODS = {
  round: {
    label: '四舍五入',
    fn: Math.round,
    desc: '小数点以下を四捨五入'
  },
  floor: {
    label: '切り捨て',
    fn: Math.floor,
    desc: '小数点以下を切り捨て'
  },
  ceil: {
    label: '切り上げ',
    fn: Math.ceil,
    desc: '小数点以下を切り上げ'
  }
};
const calcTax = (incTax, rate = 0.1, method = 'round') => {
  const m = TAX_METHODS[method] || TAX_METHODS.round;
  const exc = m.fn(incTax / (1 + rate));
  const tax = incTax - exc;
  return {
    exc,
    tax
  };
};
const genInvoiceNo = (yearMonth, code, seq = 1) => {
  const ym = yearMonth.replace('-', '');
  return `${ym}-${code}-${String(seq).padStart(2, '0')}`;
};
const lastMonth = (d = TODAY) => {
  const y = d.getFullYear(),
    m = d.getMonth(); // 0-indexed
  const prev = new Date(y, m - 1, 1);
  return `${prev.getFullYear()}-${String(prev.getMonth() + 1).padStart(2, '0')}`;
};
const recentMonths = (n = 24) => {
  const arr = [];
  let d = new Date(TODAY.getFullYear(), TODAY.getMonth(), 1);
  for (let i = 0; i < n; i++) {
    arr.push(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`);
    d = new Date(d.getFullYear(), d.getMonth() - 1, 1);
  }
  return arr;
};
Object.assign(window, {
  COMPANY,
  STORES,
  HISTORY,
  DEFAULT_STORES,
  DEFAULT_HISTORY,
  persistStores,
  persistHistory,
  TODAY,
  TAX_METHODS,
  fmtYen,
  fmtYM_jp,
  fmtJpDate,
  fmtJpDateStr,
  calcTax,
  genInvoiceNo,
  lastMonth,
  recentMonths
});
;
// Shared components: Toast, Modal, Drawer, Checkbox, MonthPicker, MultiStoreSelect, DatePicker

// ---- Toast manager ----
const ToastCtx = React.createContext({
  push: () => {}
});
const ToastProvider = ({
  children
}) => {
  const [items, setItems] = React.useState([]);
  const push = React.useCallback((msg, kind = 'success') => {
    const id = Math.random().toString(36).slice(2);
    setItems(l => [...l, {
      id,
      msg,
      kind
    }]);
    setTimeout(() => setItems(l => l.filter(x => x.id !== id)), 3000);
  }, []);
  return /*#__PURE__*/React.createElement(ToastCtx.Provider, {
    value: {
      push
    }
  }, children, /*#__PURE__*/React.createElement("div", {
    className: "toast-wrap"
  }, items.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    className: `toast ${t.kind}`
  }, /*#__PURE__*/React.createElement(Icon, {
    name: t.kind === 'success' ? 'check' : t.kind === 'error' ? 'alert' : 'info',
    size: 16,
    color: t.kind === 'success' ? '#16A34A' : t.kind === 'error' ? '#DC2626' : t.kind === 'warning' ? '#F59E0B' : '#1E40AF'
  }), /*#__PURE__*/React.createElement("span", null, t.msg)))));
};
const useToast = () => React.useContext(ToastCtx);

// ---- Checkbox ----
const Checkbox = ({
  checked,
  indeterminate,
  onChange,
  disabled
}) => /*#__PURE__*/React.createElement("span", {
  className: `ck ${checked ? 'checked' : ''} ${indeterminate && !checked ? 'indeterminate' : ''}`,
  style: {
    opacity: disabled ? 0.4 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer'
  },
  onClick: e => {
    e.stopPropagation();
    if (!disabled) onChange?.(!checked);
  }
});

// ---- Modal ----
const Modal = ({
  open,
  onClose,
  width = 600,
  children,
  title,
  footer,
  headerExtra
}) => {
  React.useEffect(() => {
    if (!open) return;
    const fn = e => {
      if (e.key === 'Escape') onClose?.();
    };
    document.addEventListener('keydown', fn);
    return () => document.removeEventListener('keydown', fn);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-mask",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    style: {
      width
    },
    onClick: e => e.stopPropagation()
  }, (title || headerExtra) && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      padding: '0 20px',
      borderBottom: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 600
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, headerExtra, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    style: {
      width: 32,
      padding: 0,
      color: 'var(--text-secondary)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 18
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 64,
      padding: '0 20px',
      borderTop: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 8,
      flexShrink: 0
    }
  }, footer)));
};

// ---- Drawer ----
const Drawer = ({
  open,
  onClose,
  title,
  children,
  footer
}) => {
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "drawer-mask",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    className: "drawer"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      padding: '0 20px',
      borderBottom: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 600
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    style: {
      width: 32,
      padding: 0,
      color: 'var(--text-secondary)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: 20
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 64,
      padding: '0 20px',
      borderTop: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 8
    }
  }, footer)));
};

// ---- MonthPicker ----
const MonthPicker = ({
  value,
  onChange,
  width = 200
}) => {
  const [open, setOpen] = React.useState(false);
  const wrap = React.useRef(null);
  React.useEffect(() => {
    const fn = e => {
      if (wrap.current && !wrap.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);
  const months = recentMonths(24);
  return /*#__PURE__*/React.createElement("div", {
    ref: wrap,
    style: {
      position: 'relative',
      width
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "input",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      textAlign: 'left',
      cursor: 'pointer'
    },
    onClick: () => setOpen(o => !o)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 14,
    color: "var(--text-tertiary)"
  }), fmtYM_jp(value)), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron",
    size: 14,
    color: "var(--text-tertiary)"
  })), open && /*#__PURE__*/React.createElement("div", {
    className: "pop",
    style: {
      top: 40,
      left: 0,
      width: '100%',
      padding: 4
    }
  }, months.map(m => /*#__PURE__*/React.createElement("div", {
    key: m,
    className: "pop-item",
    onClick: () => {
      onChange(m);
      setOpen(false);
    },
    style: {
      background: m === value ? 'var(--primary-50)' : undefined,
      color: m === value ? 'var(--primary-500)' : undefined,
      fontWeight: m === value ? 500 : 400,
      borderRadius: 4
    }
  }, fmtYM_jp(m)))));
};

// ---- MultiStoreSelect ----
const MultiStoreSelect = ({
  stores,
  selected,
  onChange,
  width = 360
}) => {
  const [open, setOpen] = React.useState(false);
  const [q, setQ] = React.useState('');
  const wrap = React.useRef(null);
  React.useEffect(() => {
    const fn = e => {
      if (wrap.current && !wrap.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);
  const filtered = stores.filter(s => !q || s.shortName.toLowerCase().includes(q.toLowerCase()) || s.code.toLowerCase().includes(q.toLowerCase()) || s.companyName.toLowerCase().includes(q.toLowerCase()));
  const allSel = selected.length === stores.length;
  const toggle = id => {
    onChange(selected.includes(id) ? selected.filter(x => x !== id) : [...selected, id]);
  };
  const toggleAll = () => onChange(allSel ? [] : stores.map(s => s.id));
  return /*#__PURE__*/React.createElement("div", {
    ref: wrap,
    style: {
      position: 'relative',
      width
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "input",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      textAlign: 'left',
      cursor: 'pointer'
    },
    onClick: () => setOpen(o => !o)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "store",
    size: 14,
    color: "var(--text-tertiary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, selected.length === 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)'
    }
  }, "\u9009\u62E9\u5E97\u94FA") : selected.length === stores.length ? '全部店铺' : `已选 ${selected.length} 家`)), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron",
    size: 14,
    color: "var(--text-tertiary)"
  })), open && /*#__PURE__*/React.createElement("div", {
    className: "pop",
    style: {
      top: 40,
      left: 0,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 8,
      borderBottom: '1px solid var(--border)',
      position: 'sticky',
      top: 0,
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 10,
      top: '50%',
      transform: 'translateY(-50%)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 14,
    color: "var(--text-tertiary)"
  })), /*#__PURE__*/React.createElement("input", {
    className: "input",
    style: {
      height: 32,
      paddingLeft: 32
    },
    placeholder: "\u641C\u7D22\u5E97\u540D/\u7F29\u5199",
    value: q,
    onChange: e => setQ(e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pop-item",
    onClick: toggleAll,
    style: {
      fontWeight: 500,
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: allSel,
    indeterminate: selected.length > 0 && !allSel,
    onChange: toggleAll
  }), /*#__PURE__*/React.createElement("span", null, "\u5168\u9009")), filtered.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.id,
    className: "pop-item",
    onClick: () => toggle(s.id)
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: selected.includes(s.id),
    onChange: () => toggle(s.id)
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, s.shortName), /*#__PURE__*/React.createElement("span", {
    className: "num",
    style: {
      fontSize: 11,
      padding: '1px 6px',
      background: '#F1F5F9',
      color: 'var(--text-secondary)',
      borderRadius: 3
    }
  }, s.code))), filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      textAlign: 'center',
      color: 'var(--text-tertiary)',
      fontSize: 13
    }
  }, "\u672A\u627E\u5230\u5339\u914D")));
};

// ---- DateInput (simple) ----
const DateInput = ({
  value,
  onChange,
  width = '100%'
}) => {
  // value is ISO yyyy-mm-dd
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    className: "text-input-cell",
    style: {
      paddingRight: 4
    },
    value: value,
    onChange: e => onChange(e.target.value),
    min: "2020-01-01"
  }));
};

// ---- ConfirmDialog ----
const Confirm = ({
  open,
  title,
  body,
  confirmText = '确认',
  cancelText = '取消',
  danger,
  onConfirm,
  onCancel
}) => /*#__PURE__*/React.createElement(Modal, {
  open: open,
  onClose: onCancel,
  title: title,
  width: 440,
  footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary",
    onClick: onCancel
  }, cancelText), /*#__PURE__*/React.createElement("button", {
    className: `btn ${danger ? 'btn-danger' : 'btn-primary'}`,
    onClick: onConfirm
  }, confirmText))
}, /*#__PURE__*/React.createElement("div", {
  style: {
    padding: 24,
    fontSize: 14,
    color: 'var(--text-secondary)',
    lineHeight: 1.6
  }
}, body));

// ---- Empty state ----
const Empty = ({
  title,
  body,
  cta
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    padding: '60px 24px',
    textAlign: 'center'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 200,
    height: 160,
    margin: '0 auto 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}, /*#__PURE__*/React.createElement("svg", {
  width: "160",
  height: "120",
  viewBox: "0 0 160 120",
  fill: "none"
}, /*#__PURE__*/React.createElement("rect", {
  x: "30",
  y: "20",
  width: "100",
  height: "80",
  rx: "6",
  fill: "#F1F5F9",
  stroke: "#CBD5E1",
  strokeWidth: "1.5"
}), /*#__PURE__*/React.createElement("rect", {
  x: "44",
  y: "36",
  width: "60",
  height: "6",
  rx: "2",
  fill: "#CBD5E1"
}), /*#__PURE__*/React.createElement("rect", {
  x: "44",
  y: "50",
  width: "72",
  height: "4",
  rx: "2",
  fill: "#E2E8F0"
}), /*#__PURE__*/React.createElement("rect", {
  x: "44",
  y: "60",
  width: "50",
  height: "4",
  rx: "2",
  fill: "#E2E8F0"
}), /*#__PURE__*/React.createElement("rect", {
  x: "44",
  y: "72",
  width: "60",
  height: "4",
  rx: "2",
  fill: "#E2E8F0"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "120",
  cy: "92",
  r: "14",
  fill: "#fff",
  stroke: "#CBD5E1",
  strokeWidth: "1.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M115 92 L119 96 L126 88",
  stroke: "#94A3B8",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  fill: "none"
}))), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 6
  }
}, title), body && /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 13,
    color: 'var(--text-secondary)',
    marginBottom: 20
  }
}, body), cta);
Object.assign(window, {
  ToastProvider,
  useToast,
  Checkbox,
  Modal,
  Drawer,
  MonthPicker,
  MultiStoreSelect,
  DateInput,
  Confirm,
  Empty
});
;
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
  months // new: [{yearMonth, amount}, ...]
}) => {
  // Normalize: build months array from either months prop or single yearMonth+amountIncTax
  const monthEntries = months && months.length > 0 ? months : [{
    yearMonth: yearMonth || lastMonth(),
    amount: amountIncTax || 0
  }];
  const totalAmount = monthEntries.reduce((s, m) => s + (m.amount || 0), 0);
  const {
    exc,
    tax
  } = calcTax(totalAmount, taxRate, taxMethod);
  const issueDateObj = new Date();
  const yen = n => '¥' + (n || 0).toLocaleString('en-US');
  const num = n => (n || 0).toLocaleString('en-US');
  const receiver = receiverName ?? (store ? store.companyName : '');
  const VAR = variant === 'template' ? '#C00000' : '#000';
  const nMonths = monthEntries.length;

  // Strip any existing month suffix from itemName so we can re-add per row
  const baseItemName = (itemName || '業務委託サービス料').replace(/（\d{4}年\d{1,2}月）$/, '');

  // Month range label for title area
  const firstYM = monthEntries[0].yearMonth;
  const lastYM = monthEntries[nMonths - 1].yearMonth;
  const monthLabel = nMonths === 1 ? fmtYM_jp(firstYM) : `${fmtYM_jp(firstYM)}～${fmtYM_jp(lastYM)}`;

  // Unified font stack
  const JP_FONT = `'Microsoft YaHei','微软雅黑','Noto Sans JP','Yu Gothic','PingFang SC',sans-serif`;
  const bandStyle = {
    padding: '12px 18px',
    borderBottom: '1px solid #000',
    fontFamily: JP_FONT,
    fontSize: 12,
    lineHeight: 1.7
  };
  const labelStyle = {
    fontWeight: 700
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "pdf-paper",
    style: {
      fontFamily: JP_FONT,
      color: '#000',
      padding: '48px 48px 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid #000'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 0',
      borderBottom: '1px solid #000',
      textAlign: 'center',
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: '0.45em',
      paddingLeft: '0.45em'
    }
  }, "\u8ACB \u6C42 \u66F8\u3000\u517C\u3000\u9818 \u53CE \u66F8"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...bandStyle,
      padding: '16px 18px 18px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: VAR,
      fontWeight: 500,
      lineHeight: 1.5
    }
  }, receiver, /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 6
    }
  }, "\u5FA1\u4E2D")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: VAR,
      fontWeight: 500,
      textAlign: 'right'
    }
  }, "\u8ACB\u6C42\u66F8No.", invoiceNo)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: VAR,
      fontWeight: 500
    }
  }, "\u8ACB\u6C42\u65E5\uFF1A", fmtJpDate(issueDateObj))), showSeal && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: 4,
      paddingRight: 4
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: typeof window !== 'undefined' && window.__resources && window.__resources.seal || 'assets/seal.png',
    alt: "seal",
    style: {
      width: 54,
      height: 54,
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      fontSize: 12,
      lineHeight: 1.7,
      paddingRight: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700
    }
  }, COMPANY.name), /*#__PURE__*/React.createElement("div", null, COMPANY.address))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...bandStyle,
      padding: '14px 18px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700
    }
  }, "\u8ACB\u6C42\u91D1\u984D(\u6D88\u8CBB\u7A0E\u8FBC)"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: VAR
    }
  }, yen(totalAmount))), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      borderBottom: '1px solid #000'
    }
  }, /*#__PURE__*/React.createElement("colgroup", null, /*#__PURE__*/React.createElement("col", {
    style: {
      width: '52%'
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: '20%'
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: '28%'
    }
  })), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: '#E7E6E6'
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      ...tableCell,
      fontWeight: 700,
      borderRight: '1px solid #000'
    }
  }, "\u6848\u4EF6\u540D"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...tableCell,
      fontWeight: 700,
      borderRight: '1px solid #000'
    }
  }, "\u6570\u91CF"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...tableCell,
      fontWeight: 700
    }
  }, "\u91D1\u984D"))), /*#__PURE__*/React.createElement("tbody", null, monthEntries.map((m, idx) => /*#__PURE__*/React.createElement("tr", {
    key: m.yearMonth,
    style: {
      borderTop: idx === 0 ? '1px solid #000' : undefined
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...tableCell,
      color: VAR,
      borderRight: '1px solid #000',
      textAlign: 'center'
    }
  }, `${baseItemName}（${fmtYM_jp(m.yearMonth)}）`), /*#__PURE__*/React.createElement("td", {
    style: {
      ...tableCell,
      borderRight: '1px solid #000'
    }
  }, quantity), /*#__PURE__*/React.createElement("td", {
    style: {
      ...tableCell,
      textAlign: 'right',
      color: VAR,
      paddingRight: 14
    }
  }, num(m.amount)))), nMonths < 3 && Array.from({
    length: 3 - nMonths
  }).map((_, i) => /*#__PURE__*/React.createElement("tr", {
    key: 'spacer-' + i,
    style: {
      borderTop: '1px solid #000'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...tableCell,
      borderRight: '1px solid #000',
      height: 26
    }
  }, "\xA0"), /*#__PURE__*/React.createElement("td", {
    style: {
      ...tableCell,
      borderRight: '1px solid #000'
    }
  }, "\xA0"), /*#__PURE__*/React.createElement("td", {
    style: {
      ...tableCell
    }
  }, "\xA0"))))), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      borderBottom: '1px solid #000'
    }
  }, /*#__PURE__*/React.createElement("colgroup", null, /*#__PURE__*/React.createElement("col", {
    style: {
      width: '34%'
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: '38%'
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: '28%'
    }
  })), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      borderRight: '1px solid #000',
      padding: 0
    }
  }, "\xA0"), /*#__PURE__*/React.createElement("td", {
    style: {
      ...tableCell,
      borderRight: '1px solid #000',
      textAlign: 'center',
      fontWeight: 700
    }
  }, "\u2460Total ", nMonths, " times (\u7A0E\u629C)"), /*#__PURE__*/React.createElement("td", {
    style: {
      ...tableCell,
      textAlign: 'right',
      color: VAR,
      paddingRight: 14,
      fontWeight: 700
    }
  }, yen(exc))), /*#__PURE__*/React.createElement("tr", {
    style: {
      borderTop: '1px solid #000'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      borderRight: '1px solid #000',
      padding: 0
    }
  }, "\xA0"), /*#__PURE__*/React.createElement("td", {
    style: {
      ...tableCell,
      borderRight: '1px solid #000',
      textAlign: 'center',
      fontWeight: 700
    }
  }, "\u2461\u6D88\u8CBB\u7A0E (\u4E0A\u8A18\u306E", Math.round(taxRate * 100), "%)"), /*#__PURE__*/React.createElement("td", {
    style: {
      ...tableCell,
      textAlign: 'right',
      color: VAR,
      paddingRight: 14,
      fontWeight: 700
    }
  }, yen(tax))), /*#__PURE__*/React.createElement("tr", {
    style: {
      borderTop: '1px solid #000'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      borderRight: '1px solid #000',
      padding: 0
    }
  }, "\xA0"), /*#__PURE__*/React.createElement("td", {
    style: {
      ...tableCell,
      borderRight: '1px solid #000',
      textAlign: 'center',
      fontWeight: 700
    }
  }, "\u8ACB\u6C42\u984D(\u2460\uFF0B\u2461)"), /*#__PURE__*/React.createElement("td", {
    style: {
      ...tableCell,
      textAlign: 'right',
      color: VAR,
      paddingRight: 14,
      fontWeight: 700
    }
  }, yen(totalAmount))))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...bandStyle,
      padding: '14px 18px 16px',
      lineHeight: 1.85
    }
  }, /*#__PURE__*/React.createElement("div", null, "\uFF0A\u304A\u632F\u8FBC\u307F\u306F\u3001\u4E0B\u8A18\u306E\u53E3\u5EA7\u307E\u3067\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("div", null, "\u306A\u304A\u3001\u632F\u8FBC\u624B\u6570\u6599\u306F\u3054\u8CA0\u62C5\u3044\u305F\u3060\u304D\u307E\u3059\u3088\u3046\u3001\u304A\u9858\u3044\u7533\u3057\u4E0A\u3052\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...labelStyle
    }
  }, "\u3008\u304A\u632F\u8FBC\u5148\u3009"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, "\u4E09\u4E95\u4F4F\u53CB\u9280\u884C"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...labelStyle,
      marginLeft: 14
    }
  }, "\u56DB\u6761\u652F\u5E97"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...labelStyle,
      marginLeft: 14
    }
  }, "\u666E\u901A\u53E3\u5EA7"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...labelStyle,
      marginLeft: 14
    }
  }, "2175677")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, "\u3010\u53E3\u5EA7\u540D\u7FA9\u3011"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...labelStyle,
      marginLeft: 8
    }
  }, COMPANY.accountName))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...bandStyle,
      padding: '14px 18px 18px',
      lineHeight: 1.85,
      borderBottom: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", null, "\u306A\u304A\u3001\u672C\u9818\u53CE\u66F8\u306F\u3001\u9280\u884C\u632F\u8FBC\u306E\u5B8C\u4E86\u3092\u3082\u3063\u3066\u6709\u52B9\u3068\u3055\u305B\u3066\u3044\u305F\u3060\u304D\u307E\u3059\u3002\u672C\u4EF6\u306B\u3064\u3044\u3066\u306E\u304A\u554F\u3044\u5408\u308F\u305B\u306F\u3001\u4E0B\u8A18\u306E\u62C5\u5F53\u8005\u307E\u3067\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, "\u3008\u62C5\u5F53\u8005\u3009\u3000", COMPANY.contactName)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, "TEL: ", COMPANY.contactTel)))));
};
const tableCell = {
  padding: '10px 12px',
  fontSize: 12,
  textAlign: 'center',
  verticalAlign: 'middle',
  fontFamily: `'Microsoft YaHei','微软雅黑','Noto Sans JP','Yu Gothic','PingFang SC',sans-serif`
};
window.InvoicePDF = InvoicePDF;
;
// InvoiceEditor — full-screen modal to customize a single invoice
// Left: form with all editable fields + tax calc method + notes
// Right: live preview of the PDF reflecting all changes
// Supports multi-month invoices via months array

const Section = ({
  id,
  title,
  children
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: 20
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    fontWeight: 700,
    color: 'var(--text-tertiary)',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    marginBottom: 10,
    paddingBottom: 6,
    borderBottom: '1px solid var(--border)'
  }
}, title), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }
}, children));
const Row = ({
  label,
  sub,
  children
}) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginBottom: 6
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12,
    fontWeight: 500,
    color: 'var(--text-primary)'
  }
}, label), sub && /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    color: 'var(--text-tertiary)'
  }
}, sub)), children);
const SegBtn = ({
  active,
  onClick,
  children
}) => /*#__PURE__*/React.createElement("button", {
  onClick: onClick,
  style: {
    flex: 1,
    height: 32,
    border: 'none',
    borderRadius: 5,
    fontSize: 12,
    fontWeight: active ? 600 : 400,
    background: active ? '#fff' : 'transparent',
    color: active ? 'var(--primary-500)' : 'var(--text-secondary)',
    boxShadow: active ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
    cursor: 'pointer',
    transition: 'all 150ms'
  }
}, children);
const InvoiceEditor = ({
  open,
  onClose,
  stores,
  initial,
  onSave,
  onGenerate
}) => {
  const toast = useToast();
  const [data, setData] = React.useState(initial || {});
  const [activeSection, setActiveSection] = React.useState('basic');
  React.useEffect(() => {
    if (open && initial) {
      const init = {
        ...initial
      };
      // Normalize months
      if (!init.months || init.months.length === 0) {
        init.months = [{
          yearMonth: init.yearMonth || lastMonth(),
          amount: init.amount || 0
        }];
      }
      init.amount = init.months.reduce((s, m) => s + (m.amount || 0), 0);
      setData(init);
    }
  }, [open, initial]);
  if (!open) return null;
  const store = stores.find(s => s.id === data.storeId);
  if (!store) return null;
  const set = (k, v) => setData(d => ({
    ...d,
    [k]: v
  }));
  const totalAmount = (data.months || []).reduce((s, m) => s + (m.amount || 0), 0);
  const {
    exc,
    tax
  } = calcTax(totalAmount, data.taxRate ?? 0.1, data.taxMethod || 'round');
  const valid = totalAmount > 0 && totalAmount <= 99999999;
  const setMonthAmount = (idx, val) => {
    setData(d => {
      const months = [...d.months];
      months[idx] = {
        ...months[idx],
        amount: val
      };
      return {
        ...d,
        months,
        amount: months.reduce((s, m) => s + (m.amount || 0), 0)
      };
    });
  };
  const addMonth = () => {
    const existing = new Set((data.months || []).map(m => m.yearMonth));
    const available = recentMonths(24).filter(m => !existing.has(m));
    if (available.length === 0) return;
    setData(d => ({
      ...d,
      months: [...d.months, {
        yearMonth: available[0],
        amount: 0
      }]
    }));
  };
  const removeMonth = idx => {
    setData(d => {
      if (d.months.length <= 1) return d;
      const months = d.months.filter((_, i) => i !== idx);
      return {
        ...d,
        months,
        amount: months.reduce((s, m) => s + (m.amount || 0), 0)
      };
    });
  };
  const setMonthYM = (idx, ym) => {
    setData(d => {
      const months = [...d.months];
      months[idx] = {
        ...months[idx],
        yearMonth: ym
      };
      return {
        ...d,
        months
      };
    });
  };

  // ---- form sections (defined at module level to keep stable React component references) ----

  return /*#__PURE__*/React.createElement("div", {
    className: "modal-mask",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    style: {
      width: 1240,
      height: '92vh'
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      padding: '0 20px',
      borderBottom: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "edit",
    size: 18,
    color: "var(--primary-500)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 600
    }
  }, "\u7F16\u8F91\u8BF7\u6C42\u4E66"), /*#__PURE__*/React.createElement("div", {
    className: "num",
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)',
      padding: '2px 8px',
      background: '#F1F5F9',
      borderRadius: 4
    }
  }, data.invoiceNo)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary btn-sm",
    onClick: () => {
      onSave?.(data);
      toast.push('草稿已保存', 'success');
    }
  }, "\u4FDD\u5B58\u8349\u7A3F"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-sm",
    disabled: !valid,
    onClick: () => {
      onGenerate?.(data);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download",
    size: 13
  }), " \u751F\u6210 PDF"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    style: {
      width: 32,
      padding: 0,
      color: 'var(--text-secondary)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 18
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 440,
      borderRight: '1px solid var(--border)',
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      padding: 6,
      margin: 12,
      background: '#F1F5F9',
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement(SegBtn, {
    active: activeSection === 'basic',
    onClick: () => setActiveSection('basic')
  }, "\u57FA\u672C\u4FE1\u606F"), /*#__PURE__*/React.createElement(SegBtn, {
    active: activeSection === 'tax',
    onClick: () => setActiveSection('tax')
  }, "\u7A0E\u989D\u8BA1\u7B97"), /*#__PURE__*/React.createElement(SegBtn, {
    active: activeSection === 'display',
    onClick: () => setActiveSection('display')
  }, "\u663E\u793A\u9009\u9879")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '0 20px 20px'
    }
  }, activeSection === 'basic' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    title: "\u6536\u4EF6\u4FE1\u606F"
  }, /*#__PURE__*/React.createElement(Row, {
    label: "\u6536\u4EF6\u4EBA\uFF08\u4F1A\u793E\u540D\uFF09",
    sub: data.receiverName !== store.companyName ? '已自定义' : '默认'
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    style: {
      fontFamily: 'var(--font-jp)'
    },
    value: data.receiverName ?? store.companyName,
    onChange: e => set('receiverName', e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    style: {
      padding: 0,
      fontSize: 11
    },
    onClick: () => set('receiverName', store.companyName)
  }, "\u21BB \u91CD\u7F6E\u4E3A\u5E97\u94FA\u4F1A\u793E\u540D")))), /*#__PURE__*/React.createElement(Section, {
    title: "\u8BF7\u6C42\u4E66"
  }, /*#__PURE__*/React.createElement(Row, {
    label: "\u8BF7\u6C42\u4E66\u7F16\u53F7"
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    style: {
      fontFamily: 'var(--font-mono)'
    },
    value: data.invoiceNo || '',
    onChange: e => set('invoiceNo', e.target.value)
  })), /*#__PURE__*/React.createElement(Row, {
    label: "\u8BF7\u6C42\u65E5"
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    className: "input",
    value: data.issueDate || '',
    onChange: e => set('issueDate', e.target.value)
  }))), /*#__PURE__*/React.createElement(Section, {
    title: `明细（${(data.months || []).length} 个月）`
  }, /*#__PURE__*/React.createElement(Row, {
    label: "\u6570\u91CF"
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    style: {
      fontFamily: 'var(--font-jp)',
      width: 120
    },
    value: data.quantity || '1式',
    onChange: e => set('quantity', e.target.value)
  })), /*#__PURE__*/React.createElement(Row, {
    label: "\u6848\u4EF6\u540D"
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    style: {
      fontFamily: 'var(--font-jp)'
    },
    value: data.itemName || '',
    onChange: e => set('itemName', e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 500
    }
  }, "\u5404\u6708\u91D1\u989D"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    style: {
      padding: '0 6px',
      fontSize: 11
    },
    onClick: addMonth
  }, "+ \u6DFB\u52A0\u6708\u4EFD")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, (data.months || []).map((m, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 130,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("select", {
    className: "select",
    style: {
      height: 36,
      fontSize: 13,
      fontFamily: 'var(--font-jp)'
    },
    value: m.yearMonth,
    onChange: e => setMonthYM(idx, e.target.value)
  }, recentMonths(24).map(ym => /*#__PURE__*/React.createElement("option", {
    key: ym,
    value: ym
  }, fmtYM_jp(ym))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 10,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--text-tertiary)',
      fontSize: 13
    }
  }, "\xA5"), /*#__PURE__*/React.createElement("input", {
    className: "input",
    style: {
      paddingLeft: 24,
      fontFamily: 'var(--font-mono)',
      textAlign: 'right'
    },
    value: m.amount || '',
    onChange: e => {
      const n = parseInt(e.target.value.replace(/[^\d]/g, ''), 10);
      setMonthAmount(idx, Number.isNaN(n) ? 0 : Math.min(n, 99999999));
    }
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    style: {
      padding: '0 4px',
      color: 'var(--error-500)',
      flexShrink: 0
    },
    onClick: () => removeMonth(idx),
    disabled: (data.months || []).length <= 1
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    size: 14
  })))))), /*#__PURE__*/React.createElement(Row, {
    label: "\u542B\u7A0E\u91D1\u989D\u5408\u8BA1 (\xA5)",
    sub: "1 ~ 99,999,999 \u6574\u6570"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--text-tertiary)'
    }
  }, "\xA5"), /*#__PURE__*/React.createElement("div", {
    className: "input",
    style: {
      paddingLeft: 26,
      fontFamily: 'var(--font-mono)',
      textAlign: 'right',
      fontSize: 15,
      fontWeight: 600,
      background: '#F8FAFC',
      color: 'var(--text-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
    }
  }, totalAmount.toLocaleString('en-US')))))), activeSection === 'tax' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    title: "\u7A0E\u7387\u4E0E\u65B9\u5F0F"
  }, /*#__PURE__*/React.createElement(Row, {
    label: "\u7A0E\u7387"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    type: "number",
    step: "1",
    min: "0",
    max: "100",
    style: {
      width: 100,
      fontFamily: 'var(--font-mono)',
      textAlign: 'right'
    },
    value: Math.round((data.taxRate ?? 0.1) * 100),
    onChange: e => set('taxRate', Math.max(0, Math.min(100, parseFloat(e.target.value) || 0)) / 100)
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 14
    }
  }, "%"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    style: {
      padding: '0 8px'
    },
    onClick: () => set('taxRate', 0.1)
  }, "10%"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    style: {
      padding: '0 8px'
    },
    onClick: () => set('taxRate', 0.08)
  }, "8%"))), /*#__PURE__*/React.createElement(Row, {
    label: "\u5C0F\u6570\u5904\u7406\u65B9\u5F0F"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, Object.entries(TAX_METHODS).map(([key, m]) => /*#__PURE__*/React.createElement("label", {
    key: key,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 12px',
      border: `1px solid ${(data.taxMethod || 'round') === key ? 'var(--primary-500)' : 'var(--border)'}`,
      background: (data.taxMethod || 'round') === key ? 'var(--primary-50)' : '#fff',
      borderRadius: 6,
      cursor: 'pointer',
      transition: 'all 150ms'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: "tax-method",
    checked: (data.taxMethod || 'round') === key,
    onChange: () => set('taxMethod', key),
    style: {
      accentColor: 'var(--primary-500)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500
    }
  }, m.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-tertiary)'
    }
  }, m.desc)), /*#__PURE__*/React.createElement("span", {
    className: "num",
    style: {
      fontSize: 11,
      padding: '2px 8px',
      background: 'rgba(0,0,0,0.04)',
      borderRadius: 3,
      color: 'var(--text-secondary)'
    }
  }, "\xA5", TAX_METHODS[key].fn(totalAmount / (1 + (data.taxRate ?? 0.1))).toLocaleString())))))), /*#__PURE__*/React.createElement(Section, {
    title: "\u8BA1\u7B97\u7ED3\u679C"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#F8FAFC',
      borderRadius: 8,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement(CalcRow, {
    label: "\u542B\u7A0E\u91D1\u989D\uFF08\u6D88\u8CBB\u7A0E\u8FBC\uFF09",
    value: fmtYen(totalAmount)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px dashed var(--border)',
      margin: '8px 0'
    }
  }), /*#__PURE__*/React.createElement(CalcRow, {
    label: `税抜 (${TAX_METHODS[data.taxMethod || 'round'].label})`,
    value: fmtYen(exc),
    muted: true
  }), /*#__PURE__*/React.createElement(CalcRow, {
    label: `消費税 (${Math.round((data.taxRate ?? 0.1) * 100)}%)`,
    value: fmtYen(tax),
    muted: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--text-primary)',
      margin: '8px 0'
    }
  }), /*#__PURE__*/React.createElement(CalcRow, {
    label: "\u5408\u8A08 (\u7A0E\u629C + \u6D88\u8CBB\u7A0E)",
    value: fmtYen(exc + tax),
    bold: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      padding: '8px 10px',
      background: '#fff',
      borderRadius: 4,
      fontSize: 11,
      color: 'var(--text-secondary)',
      fontFamily: 'var(--font-mono)'
    }
  }, totalAmount.toLocaleString(), " \xF7 ", (1 + (data.taxRate ?? 0.1)).toFixed(2), " = ", (totalAmount / (1 + (data.taxRate ?? 0.1))).toFixed(4), /*#__PURE__*/React.createElement("br", null), "\u2192 ", TAX_METHODS[data.taxMethod || 'round'].label, " \u2192 ", exc.toLocaleString()))), /*#__PURE__*/React.createElement(Section, {
    title: "\u5907\u6CE8"
  }, /*#__PURE__*/React.createElement(Row, {
    label: "\u8BA1\u7B97\u8BF4\u660E / \u5907\u6CE8",
    sub: `${(data.taxNote || '').length}/200 · 仅内部记录`
  }, /*#__PURE__*/React.createElement("textarea", {
    className: "input",
    rows: 3,
    maxLength: 200,
    placeholder: "\u4F8B\uFF1A\u672C\u6708\u542B\u8DE8\u5E74\u5EA6\u8C03\u6574\uFF1B\u6309\u5BA2\u6237\u8981\u6C42\u4F7F\u7528\u5207\u308A\u4E0A\u3052\uFF1B\u4E0E\u5BF9\u8D26\u5355 Z-2026-04 \u5BF9\u5E94",
    value: data.taxNote || '',
    onChange: e => set('taxNote', e.target.value)
  })))), activeSection === 'display' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    title: "\u5370\u7AE0"
  }, /*#__PURE__*/React.createElement(Row, {
    label: "\u663E\u793A\u516C\u53F8\u5370\u7AE0"
  }, /*#__PURE__*/React.createElement(ToggleRow, {
    on: data.showSeal !== false,
    onChange: v => set('showSeal', v),
    label: data.showSeal !== false ? '显示印章' : '隐藏印章'
  }))), /*#__PURE__*/React.createElement(Section, {
    title: "\u6837\u5F0F"
  }, /*#__PURE__*/React.createElement(Row, {
    label: "\u53D8\u91CF\u5B57\u6BB5\u989C\u8272"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(ChoiceCard, {
    selected: (data.variant || 'final') === 'final',
    onClick: () => set('variant', 'final'),
    title: "\u6B63\u5F0F\u7248",
    desc: "\u5168\u90E8\u9ED1\u8272\uFF0C\u7528\u4E8E\u6253\u5370",
    color: "#000"
  }), /*#__PURE__*/React.createElement(ChoiceCard, {
    selected: data.variant === 'template',
    onClick: () => set('variant', 'template'),
    title: "\u6A21\u677F\u7248",
    desc: "\u53D8\u91CF\u5B57\u6BB5\u6807\u7EA2\uFF0C\u4FBF\u4E8E\u6838\u5BF9",
    color: "#C00000"
  })))), /*#__PURE__*/React.createElement(Section, {
    title: "\u72B6\u6001"
  }, /*#__PURE__*/React.createElement(Row, {
    label: "\u5F53\u524D\u72B6\u6001"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, [{
    v: 'draft',
    label: '草稿',
    desc: '未生成，可继续编辑',
    color: '#94A3B8'
  }, {
    v: 'ready',
    label: '待生成',
    desc: '信息齐全，等待批量生成',
    color: '#1E40AF'
  }, {
    v: 'generated',
    label: '已生成',
    desc: 'PDF 已生成并存档',
    color: '#16A34A'
  }, {
    v: 'voided',
    label: '已作废',
    desc: '保留记录但标记作废',
    color: '#DC2626'
  }].map(s => {
    const cur = data.status || (valid ? 'ready' : 'draft');
    return /*#__PURE__*/React.createElement("label", {
      key: s.v,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '10px 12px',
        border: `1px solid ${cur === s.v ? s.color : 'var(--border)'}`,
        background: cur === s.v ? `${s.color}10` : '#fff',
        borderRadius: 6,
        cursor: 'pointer',
        transition: 'all 150ms'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: "status",
      checked: cur === s.v,
      onChange: () => set('status', s.v),
      style: {
        accentColor: s.color
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 500
      }
    }, s.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--text-tertiary)'
      }
    }, s.desc)), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: s.color
      }
    }));
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'linear-gradient(180deg, #F1F5F9 0%, #E2E8F0 100%)',
      overflow: 'auto',
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: 800,
      margin: '0 auto 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-secondary)',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "eye",
    size: 13
  }), " \u5B9E\u65F6\u9884\u89C8"), /*#__PURE__*/React.createElement("div", {
    className: "num",
    style: {
      fontSize: 11,
      color: 'var(--text-tertiary)'
    }
  }, data.invoiceNo, ".pdf \xB7 A4")), /*#__PURE__*/React.createElement(InvoicePDF, {
    store: store,
    invoiceNo: data.invoiceNo,
    issueDate: data.issueDate,
    itemName: data.itemName,
    months: (data.months || []).length > 0 ? data.months : [{
      yearMonth: data.yearMonth || lastMonth(),
      amount: data.amount || 0
    }],
    receiverName: data.receiverName,
    quantity: data.quantity,
    taxRate: data.taxRate ?? 0.1,
    taxMethod: data.taxMethod || 'round',
    showSeal: data.showSeal !== false,
    variant: data.variant || 'final'
  }), data.taxNote && /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 800,
      margin: '16px auto 0',
      padding: 12,
      background: 'var(--warning-50)',
      border: '1px solid #FCD34D',
      borderRadius: 6,
      fontSize: 12,
      color: '#92400E'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "\u5907\u6CE8\uFF08\u4E0D\u4F1A\u663E\u793A\u5728 PDF \u4E0A\uFF09\uFF1A"), " ", data.taxNote)))));
};
const CalcRow = ({
  label,
  value,
  muted,
  bold
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    padding: '3px 0'
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 12,
    color: muted ? 'var(--text-secondary)' : 'var(--text-primary)',
    fontWeight: bold ? 600 : 400
  }
}, label), /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: bold ? 15 : 13,
    fontWeight: bold ? 700 : 500,
    fontFamily: 'var(--font-mono)',
    color: muted ? 'var(--text-secondary)' : 'var(--text-primary)'
  }
}, value));
const ToggleRow = ({
  on,
  onChange,
  label
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 12px',
    border: '1px solid var(--border)',
    borderRadius: 6
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 13
  }
}, label), /*#__PURE__*/React.createElement("button", {
  onClick: () => onChange(!on),
  style: {
    width: 40,
    height: 22,
    border: 'none',
    borderRadius: 11,
    background: on ? 'var(--primary-500)' : '#CBD5E1',
    position: 'relative',
    cursor: 'pointer',
    transition: 'background 150ms'
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    position: 'absolute',
    top: 2,
    left: on ? 20 : 2,
    width: 18,
    height: 18,
    borderRadius: '50%',
    background: '#fff',
    transition: 'left 150ms',
    boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
  }
})));
const ChoiceCard = ({
  selected,
  onClick,
  title,
  desc,
  color
}) => /*#__PURE__*/React.createElement("button", {
  onClick: onClick,
  style: {
    flex: 1,
    padding: 12,
    border: `1.5px solid ${selected ? 'var(--primary-500)' : 'var(--border)'}`,
    background: selected ? 'var(--primary-50)' : '#fff',
    borderRadius: 8,
    textAlign: 'left',
    cursor: 'pointer',
    transition: 'all 150ms'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 13,
    fontWeight: 600
  }
}, title), /*#__PURE__*/React.createElement("span", {
  style: {
    width: 16,
    height: 4,
    background: color,
    borderRadius: 2
  }
})), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    color: 'var(--text-tertiary)'
  }
}, desc));
window.InvoiceEditor = InvoiceEditor;
;
// Page A: Generate (default home)
// Multi-month: one row per store, months are columns in the table.
// One PDF per store covers all selected months.

const PageGenerate = ({
  stores,
  history,
  onHistoryAdd
}) => {
  const toast = useToast();
  const [yearMonths, setYearMonths] = React.useState([lastMonth()]);
  const [selectedIds, setSelectedIds] = React.useState(stores.map(s => s.id));
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [preview, setPreview] = React.useState(null);
  const [editor, setEditor] = React.useState(null);
  const [batchPreview, setBatchPreview] = React.useState(false);
  const [monthPickerOpen, setMonthPickerOpen] = React.useState(false);
  const monthRef = React.useRef(null);
  React.useEffect(() => {
    const fn = e => {
      if (monthRef.current && !monthRef.current.contains(e.target)) setMonthPickerOpen(false);
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);
  const availableMonths = recentMonths(12);
  const sortedMonths = [...yearMonths].sort().reverse();
  const toggleMonth = m => {
    setYearMonths(prev => {
      if (prev.includes(m)) {
        if (prev.length === 1) return prev;
        return prev.filter(x => x !== m);
      }
      return [...prev, m].sort().reverse();
    });
  };
  const buildRows = () => {
    setLoading(true);
    setTimeout(() => {
      setRows(prevRows => {
        const chosen = stores.filter(s => selectedIds.includes(s.id));
        const newRows = [];
        chosen.forEach(s => {
          const existing = prevRows.find(r => r.storeId === s.id);
          const monthsData = {};
          sortedMonths.forEach(ym => {
            if (existing && existing.monthsData && existing.monthsData[ym]) {
              monthsData[ym] = {
                ...existing.monthsData[ym]
              };
            } else {
              const baseName = s.defaultItemName || '業務委託サービス料';
              monthsData[ym] = {
                amountStr: '',
                amount: 0,
                error: null
              };
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
            status: existing ? existing.status : 'pending'
          });
        });
        return newRows;
      });
      setLoading(false);
    }, 400);
  };
  React.useEffect(() => {
    buildRows(); /* eslint-disable-next-line */
  }, []);
  React.useEffect(() => {
    if (rows.length > 0) buildRows();
  }, [yearMonths]);
  const parseAmount = s => {
    const cleaned = s.replace(/[^\d.-]/g, '');
    if (cleaned === '' || cleaned === '-') return {
      n: NaN,
      err: null
    };
    const n = Number(cleaned);
    if (Number.isNaN(n)) return {
      n: NaN,
      err: '请输入数字'
    };
    if (n <= 0) return {
      n: 0,
      err: '金额必须大于 0'
    };
    if (n > 99999999) return {
      n: 99999999,
      err: '金额最大 ¥99,999,999'
    };
    const truncated = Math.floor(n);
    return {
      n: truncated,
      err: null,
      wasFloat: !Number.isInteger(n)
    };
  };
  const setMonthAmount = (rowIdx, ym, str) => {
    setRows(rs => rs.map((r, i) => {
      if (i !== rowIdx) return r;
      const md = {
        ...r.monthsData
      };
      if (str === '') {
        md[ym] = {
          amountStr: '',
          amount: 0,
          error: null
        };
      } else {
        const {
          n,
          err,
          wasFloat
        } = parseAmount(str);
        if (wasFloat) toast.push('金额已自动取整', 'warning');
        md[ym] = {
          amountStr: str.replace(/[^\d]/g, ''),
          amount: Number.isNaN(n) ? 0 : n,
          error: err
        };
      }
      // compute status
      const allFilled = Object.values(md).every(v => v.amount > 0 && !v.error);
      const anyFilled = Object.values(md).some(v => v.amount > 0 && !v.error);
      return {
        ...r,
        monthsData: md,
        status: allFilled ? 'filled' : anyFilled ? 'partial' : 'pending'
      };
    }));
  };

  // Total amount across all stores and months
  const grandTotal = rows.reduce((s, r) => {
    return s + Object.values(r.monthsData).reduce((ss, m) => ss + (m.amount || 0), 0);
  }, 0);

  // Count stores with at least one filled month
  const filledStoreCount = rows.filter(r => Object.values(r.monthsData).some(m => m.amount > 0 && !m.error)).length;
  const pad = n => String(n).padStart(2, '0');
  const nowStr = () => {
    const now = new Date();
    return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
  };
  const getMonthsArray = row => {
    return sortedMonths.filter(ym => row.monthsData[ym] && row.monthsData[ym].amount > 0 && !row.monthsData[ym].error).map(ym => ({
      yearMonth: ym,
      amount: row.monthsData[ym].amount
    }));
  };
  const generateSingle = idx => {
    const row = rows[idx];
    const store = stores.find(s => s.id === row.storeId);
    const monthsArr = getMonthsArray(row);
    if (monthsArr.length === 0) return;
    const firstYM = monthsArr[0].yearMonth;
    const invoiceNo = genInvoiceNo(firstYM, store.code);
    const entry = {
      id: 'h' + Math.random().toString(36).slice(2, 10),
      invoiceNo,
      storeId: row.storeId,
      yearMonth: firstYM,
      months: monthsArr,
      amountIncTax: monthsArr.reduce((s, m) => s + m.amount, 0),
      issueDate: row.issueDate,
      itemName: row.itemName,
      receiverName: row.receiverName,
      quantity: row.quantity,
      taxRate: row.taxRate,
      taxMethod: row.taxMethod,
      showSeal: row.showSeal,
      variant: row.variant,
      generatedAt: nowStr()
    };
    onHistoryAdd([entry]);
    window.printInvoices([{
      storeId: row.storeId,
      invoiceNo,
      issueDate: row.issueDate,
      itemName: row.itemName,
      months: monthsArr,
      receiverName: row.receiverName,
      quantity: row.quantity,
      taxRate: row.taxRate,
      taxMethod: row.taxMethod,
      showSeal: row.showSeal,
      variant: row.variant
    }]);
    setRows(rs => rs.map((r, i) => i === idx ? {
      ...r,
      status: 'done'
    } : r));
    toast.push(`已生成 ${invoiceNo}.pdf`, 'success');
  };
  const generateBatch = () => {
    const valid = rows.filter(r => {
      const ma = getMonthsArray(r);
      return ma.length > 0;
    });
    if (valid.length === 0) return;
    const entries = [];
    const printItems = [];
    valid.forEach(row => {
      const s = stores.find(x => x.id === row.storeId);
      const monthsArr = getMonthsArray(row);
      const firstYM = monthsArr[0].yearMonth;
      const invNo = genInvoiceNo(firstYM, s.code);
      entries.push({
        id: 'h' + Math.random().toString(36).slice(2, 10),
        invoiceNo: invNo,
        storeId: row.storeId,
        yearMonth: firstYM,
        months: monthsArr,
        amountIncTax: monthsArr.reduce((sum, m) => sum + m.amount, 0),
        issueDate: row.issueDate,
        itemName: row.itemName,
        receiverName: row.receiverName,
        quantity: row.quantity,
        taxRate: row.taxRate,
        taxMethod: row.taxMethod,
        showSeal: row.showSeal,
        variant: row.variant,
        generatedAt: nowStr()
      });
      printItems.push({
        storeId: row.storeId,
        invoiceNo: invNo,
        issueDate: row.issueDate,
        itemName: row.itemName,
        months: monthsArr,
        receiverName: row.receiverName,
        quantity: row.quantity,
        taxRate: row.taxRate,
        taxMethod: row.taxMethod,
        showSeal: row.showSeal,
        variant: row.variant
      });
    });
    onHistoryAdd(entries);
    window.printInvoices(printItems);
    setRows(rs => rs.map(r => valid.some(v => v.storeId === r.storeId) ? {
      ...r,
      status: 'done'
    } : r));
    toast.push(`已生成 ${entries.length} 份 PDF — 在打印对话框中选择「另存为 PDF」即可保存`, 'success');
  };

  // Get first and last yearMonth from sorted months for display
  const firstYM = sortedMonths[sortedMonths.length - 1];
  const lastYM = sortedMonths[0];
  return /*#__PURE__*/React.createElement("div", {
    className: "fade-in",
    "data-screen-label": "01 Generate"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      margin: 0,
      marginBottom: 6,
      letterSpacing: '-0.3px'
    }
  }, "\u8BF7\u6C42\u4E66\u751F\u6210"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, "\u6309\u5E97\u94FA\u6279\u91CF\u751F\u6210\u591A\u6708\u4EFD\u65E5\u6587\u8BF7\u6C42\u4E66 PDF\uFF08\u6BCF\u6708\u4E00\u5217\uFF0C\u6BCF\u5E97\u4E00\u4EFD\uFF09")), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)',
      marginBottom: 6
    }
  }, "\u4E1A\u52A1\u6708\u4EFD\uFF08\u8868\u683C\u5217\uFF09"), /*#__PURE__*/React.createElement("div", {
    ref: monthRef,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "input",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      textAlign: 'left',
      cursor: 'pointer',
      width: 220
    },
    onClick: () => setMonthPickerOpen(o => !o)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 14,
    color: "var(--text-tertiary)"
  }), yearMonths.length === 1 ? fmtYM_jp(yearMonths[0]) : `已选 ${yearMonths.length} 个月`), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron",
    size: 14,
    color: "var(--text-tertiary)"
  })), monthPickerOpen && /*#__PURE__*/React.createElement("div", {
    className: "pop",
    style: {
      top: 40,
      left: 0,
      width: 220,
      padding: 4
    }
  }, availableMonths.map(m => /*#__PURE__*/React.createElement("div", {
    key: m,
    className: "pop-item",
    onClick: () => toggleMonth(m),
    style: {
      background: yearMonths.includes(m) ? 'var(--primary-50)' : undefined,
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: yearMonths.includes(m),
    onChange: () => toggleMonth(m)
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: yearMonths.includes(m) ? 'var(--primary-500)' : undefined,
      fontWeight: yearMonths.includes(m) ? 500 : 400
    }
  }, fmtYM_jp(m))))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)',
      marginBottom: 6
    }
  }, "\u5E97\u94FA"), /*#__PURE__*/React.createElement(MultiStoreSelect, {
    stores: stores,
    selected: selectedIds,
    onChange: setSelectedIds
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary",
    onClick: () => buildRows(),
    disabled: selectedIds.length === 0
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "refresh",
    size: 14
  }), " \u52A0\u8F7D\u5E97\u94FA")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      alignSelf: 'flex-end',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag tag-blue"
  }, "\u5DF2\u9009 ", yearMonths.length, " \u4E2A\u6708 \xB7 ", selectedIds.length, "/", stores.length, " \u5BB6")))), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      overflow: 'hidden'
    }
  }, loading ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "skeleton",
    style: {
      height: 48,
      marginBottom: 8
    }
  }))) : rows.length === 0 ? /*#__PURE__*/React.createElement(Empty, {
    title: "\u9009\u62E9\u5E97\u94FA\u540E\u5F00\u59CB\u586B\u5199\u91D1\u989D",
    body: "\u52FE\u9009\u8981\u5F00\u7968\u7684\u5E97\u94FA\u548C\u6708\u4EFD\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u52A0\u8F7D\u5E97\u94FA\u300D",
    cta: /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      onClick: () => buildRows()
    }, "\u52A0\u8F7D\u5E97\u94FA")
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl",
    style: {
      minWidth: 800 + sortedMonths.length * 150
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: 48,
      textAlign: 'center'
    }
  }, "#"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 120
    }
  }, "\u5E97\u94FA"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 200
    }
  }, "\u4F1A\u793E\u540D"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 60
    }
  }, "\u7F29\u5199"), sortedMonths.map(ym => /*#__PURE__*/React.createElement("th", {
    key: ym,
    style: {
      width: 130,
      textAlign: 'right'
    }
  }, fmtYM_jp(ym))), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 120,
      textAlign: 'right'
    }
  }, "\u5408\u8BA1\u542B\u7A0E"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 80
    }
  }, "\u72B6\u6001"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 150
    }
  }, "\u64CD\u4F5C"))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, i) => {
    const store = stores.find(s => s.id === row.storeId);
    const rowTotal = Object.values(row.monthsData).reduce((s, m) => s + (m.amount || 0), 0);
    const monthsArr = getMonthsArray(row);
    return /*#__PURE__*/React.createElement("tr", {
      key: row.storeId
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: 'center',
        color: 'var(--text-tertiary)'
      },
      className: "num"
    }, i + 1), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 500
      }
    }, store.shortName)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
      className: "has-tip",
      style: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: 180,
        color: 'var(--text-secondary)'
      }
    }, store.companyName, /*#__PURE__*/React.createElement("span", {
      className: "tip"
    }, store.companyName))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "num",
      style: {
        fontSize: 12,
        padding: '2px 8px',
        background: '#F1F5F9',
        color: 'var(--text-secondary)',
        borderRadius: 4,
        fontWeight: 500
      }
    }, store.code)), sortedMonths.map(ym => {
      const md = row.monthsData[ym] || {
        amountStr: '',
        amount: 0,
        error: null
      };
      return /*#__PURE__*/React.createElement("td", {
        key: ym
      }, /*#__PURE__*/React.createElement("div", {
        className: "num-wrap"
      }, /*#__PURE__*/React.createElement("span", {
        className: "yen-prefix"
      }, "\xA5"), /*#__PURE__*/React.createElement("input", {
        className: `num-input ${md.error ? 'error' : ''}`,
        placeholder: "0",
        value: md.amountStr || '',
        onChange: e => setMonthAmount(i, ym, e.target.value)
      })));
    }), /*#__PURE__*/React.createElement("td", {
      className: "amt-cell",
      style: {
        fontWeight: 600,
        fontFamily: 'var(--font-mono)'
      }
    }, rowTotal > 0 ? fmtYen(rowTotal) : /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-tertiary)'
      }
    }, "\u2014")), /*#__PURE__*/React.createElement("td", null, row.status === 'generating' ? /*#__PURE__*/React.createElement("span", {
      className: "tag tag-yellow"
    }, "\u751F\u6210\u4E2D\u2026") : row.status === 'done' ? /*#__PURE__*/React.createElement("span", {
      className: "tag tag-green"
    }, "\u5DF2\u751F\u6210") : row.status === 'filled' ? /*#__PURE__*/React.createElement("span", {
      className: "tag tag-blue"
    }, "\u5F85\u751F\u6210") : row.status === 'partial' ? /*#__PURE__*/React.createElement("span", {
      className: "tag tag-orange"
    }, "\u90E8\u5206\u586B\u5199") : /*#__PURE__*/React.createElement("span", {
      className: "tag tag-gray"
    }, "\u5F85\u586B\u91D1\u989D")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost btn-sm",
      style: {
        padding: '0 6px'
      },
      onClick: () => setEditor({
        ...row,
        store,
        monthsArr
      })
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "edit",
      size: 13
    }), " \u7F16\u8F91"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost btn-sm",
      style: {
        padding: '0 6px'
      },
      onClick: () => {
        const ma = getMonthsArray(row);
        const invNo = genInvoiceNo(ma.length > 0 ? ma[0].yearMonth : sortedMonths[0], store.code);
        setPreview({
          ...row,
          store,
          invoiceNo: invNo,
          monthsArr: ma
        });
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "eye",
      size: 13
    }), " \u9884\u89C8"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost btn-sm",
      style: {
        padding: '0 6px',
        color: monthsArr.length === 0 ? 'var(--text-tertiary)' : 'var(--primary-500)'
      },
      disabled: monthsArr.length === 0,
      onClick: () => generateSingle(i)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 13
    }), " \u751F\u6210"))));
  })))), rows.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "actbar"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("div", null, "\u5171 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-primary)'
    },
    className: "num"
  }, rows.length), " \u5BB6\u5E97\u94FA"), /*#__PURE__*/React.createElement("div", null, "\u5DF2\u586B ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-primary)'
    },
    className: "num"
  }, filledStoreCount), " \u5BB6"), /*#__PURE__*/React.createElement("div", null, "\u5408\u8BA1\u542B\u7A0E ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-mono)'
    }
  }, fmtYen(grandTotal)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary",
    disabled: filledStoreCount === 0,
    onClick: () => setBatchPreview(true)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "eye",
    size: 14
  }), " \u6279\u91CF\u9884\u89C8"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-lg",
    disabled: filledStoreCount === 0,
    onClick: generateBatch
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download",
    size: 15
  }), " \u6279\u91CF\u751F\u6210 PDF (", filledStoreCount, ")")))), /*#__PURE__*/React.createElement(Modal, {
    open: !!preview,
    onClose: () => setPreview(null),
    title: "\u8BF7\u6C42\u4E66\u9884\u89C8",
    width: 920,
    headerExtra: /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary btn-sm",
      onClick: () => {
        if (preview) {
          window.printInvoices([{
            storeId: preview.storeId,
            invoiceNo: preview.invoiceNo,
            issueDate: preview.issueDate,
            itemName: preview.itemName,
            months: preview.monthsArr,
            receiverName: preview.receiverName,
            quantity: preview.quantity,
            taxRate: preview.taxRate,
            taxMethod: preview.taxMethod,
            showSeal: preview.showSeal,
            variant: preview.variant
          }]);
        }
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 14
    }), " \u4E0B\u8F7D PDF")
  }, preview && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      background: 'linear-gradient(180deg, #F8FAFC 0%, #EEF2F7 100%)'
    }
  }, /*#__PURE__*/React.createElement(InvoicePDF, {
    store: preview.store,
    invoiceNo: preview.invoiceNo,
    issueDate: preview.issueDate,
    itemName: preview.itemName,
    months: preview.monthsArr.length > 0 ? preview.monthsArr : sortedMonths.map(ym => ({
      yearMonth: ym,
      amount: 0
    })),
    receiverName: preview.receiverName,
    quantity: preview.quantity,
    taxRate: preview.taxRate,
    taxMethod: preview.taxMethod,
    showSeal: preview.showSeal,
    variant: preview.variant
  }))), /*#__PURE__*/React.createElement(Modal, {
    open: batchPreview,
    onClose: () => setBatchPreview(false),
    title: `批量预览（${filledStoreCount} 份）`,
    width: 920,
    headerExtra: /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary btn-sm",
      onClick: () => {
        setBatchPreview(false);
        generateBatch();
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 14
    }), " \u5168\u90E8\u4E0B\u8F7D PDF")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      background: 'linear-gradient(180deg, #F8FAFC 0%, #EEF2F7 100%)',
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, rows.filter(r => Object.values(r.monthsData).some(m => m.amount > 0 && !m.error)).map(row => {
    const store = stores.find(s => s.id === row.storeId);
    const ma = getMonthsArray(row);
    const invNo = genInvoiceNo(ma.length > 0 ? ma[0].yearMonth : sortedMonths[0], store.code);
    return /*#__PURE__*/React.createElement("div", {
      key: row.storeId
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text-tertiary)',
        marginBottom: 12,
        fontFamily: 'var(--font-mono)'
      }
    }, invNo, ".pdf"), /*#__PURE__*/React.createElement(InvoicePDF, {
      store: store,
      invoiceNo: invNo,
      issueDate: row.issueDate,
      itemName: row.itemName,
      months: ma,
      receiverName: row.receiverName,
      quantity: row.quantity,
      taxRate: row.taxRate,
      taxMethod: row.taxMethod,
      showSeal: row.showSeal,
      variant: row.variant
    }));
  }))), /*#__PURE__*/React.createElement(InvoiceEditor, {
    open: !!editor,
    onClose: () => setEditor(null),
    stores: stores,
    initial: editor ? {
      storeId: editor.storeId,
      invoiceNo: editor.invoiceNo || genInvoiceNo(sortedMonths[0], editor.store?.code || ''),
      issueDate: editor.issueDate,
      yearMonth: sortedMonths[0],
      itemName: editor.itemName,
      amount: Object.values(editor.monthsData || {}).reduce((s, m) => s + (m.amount || 0), 0),
      months: sortedMonths.map(ym => ({
        yearMonth: ym,
        amount: editor.monthsData && editor.monthsData[ym] ? editor.monthsData[ym].amount : 0
      })),
      receiverName: editor.receiverName,
      quantity: editor.quantity || '1式',
      taxRate: editor.taxRate ?? 0.1,
      taxMethod: editor.taxMethod || 'round',
      taxNote: editor.taxNote || '',
      showSeal: editor.showSeal !== false,
      variant: editor.variant || 'final',
      status: editor.status
    } : null,
    onSave: data => {
      setRows(rs => rs.map(r => r.storeId === data.storeId ? {
        ...r,
        issueDate: data.issueDate,
        itemName: data.itemName,
        monthsData: data.months.reduce((acc, m) => {
          acc[m.yearMonth] = {
            amountStr: m.amount ? String(m.amount) : '',
            amount: m.amount || 0,
            error: null
          };
          return acc;
        }, {}),
        receiverName: data.receiverName,
        quantity: data.quantity,
        taxRate: data.taxRate,
        taxMethod: data.taxMethod,
        taxNote: data.taxNote,
        showSeal: data.showSeal,
        variant: data.variant,
        status: data.amount > 0 ? data.status || 'filled' : 'pending'
      } : r));
    },
    onGenerate: data => {
      const store = stores.find(s => s.id === data.storeId);
      const monthsArr = data.months.filter(m => m.amount > 0);
      const firstYM = monthsArr.length > 0 ? monthsArr[0].yearMonth : data.yearMonth;
      const invoiceNo = data.invoiceNo || genInvoiceNo(firstYM, store.code);
      const entry = {
        id: 'h' + Math.random().toString(36).slice(2, 10),
        invoiceNo,
        storeId: data.storeId,
        yearMonth: firstYM,
        months: monthsArr,
        amountIncTax: monthsArr.reduce((s, m) => s + m.amount, 0),
        issueDate: data.issueDate,
        itemName: data.itemName,
        receiverName: data.receiverName,
        quantity: data.quantity,
        taxRate: data.taxRate,
        taxMethod: data.taxMethod,
        showSeal: data.showSeal,
        variant: data.variant,
        generatedAt: nowStr()
      };
      onHistoryAdd([entry]);
      window.printInvoices([{
        storeId: data.storeId,
        invoiceNo,
        issueDate: data.issueDate,
        itemName: data.itemName,
        months: monthsArr,
        receiverName: data.receiverName,
        quantity: data.quantity,
        taxRate: data.taxRate,
        taxMethod: data.taxMethod,
        showSeal: data.showSeal,
        variant: data.variant
      }]);
      setRows(rs => rs.map(r => r.storeId === data.storeId ? {
        ...r,
        issueDate: data.issueDate,
        itemName: data.itemName,
        monthsData: data.months.reduce((acc, m) => {
          acc[m.yearMonth] = {
            amountStr: m.amount ? String(m.amount) : '',
            amount: m.amount || 0,
            error: null
          };
          return acc;
        }, {}),
        receiverName: data.receiverName,
        quantity: data.quantity,
        taxRate: data.taxRate,
        taxMethod: data.taxMethod,
        taxNote: data.taxNote,
        showSeal: data.showSeal,
        variant: data.variant,
        status: 'done'
      } : r));
      setEditor(null);
      toast.push(`已生成 ${invoiceNo}.pdf`, 'success');
    }
  }));
};
window.PageGenerate = PageGenerate;
;
// Page B: Stores

const StoreDrawer = ({
  open,
  mode,
  initial,
  allStores,
  onClose,
  onSave
}) => {
  const [form, setForm] = React.useState({
    shortName: '',
    companyName: '',
    code: '',
    defaultItemName: '',
    remark: ''
  });
  const [touched, setTouched] = React.useState({});
  const [dirty, setDirty] = React.useState(false);
  const [confirmCancel, setConfirmCancel] = React.useState(false);
  React.useEffect(() => {
    if (open) {
      setForm(initial || {
        shortName: '',
        companyName: '',
        code: '',
        defaultItemName: '',
        remark: ''
      });
      setTouched({});
      setDirty(false);
    }
  }, [open, initial]);
  const errors = {};
  if (!form.shortName.trim()) errors.shortName = '请填写店名';else if (form.shortName.length > 30) errors.shortName = '店名最多 30 字';
  if (!form.companyName.trim()) errors.companyName = '请填写会社名';else if (form.companyName.length > 60) errors.companyName = '会社名最多 60 字';
  if (!form.code.trim()) errors.code = '请填写缩写代码';else if (!/^[A-Z0-9]{3,4}$/.test(form.code)) errors.code = '3-4 位大写字母数字';else {
    const conflict = allStores.find(s => s.code === form.code && s.id !== initial?.id);
    if (conflict) errors.code = `缩写 ${form.code} 已被 ${conflict.shortName} 占用`;
  }
  if (form.defaultItemName && form.defaultItemName.length > 30) errors.defaultItemName = '最多 30 字';
  if (form.remark && form.remark.length > 200) errors.remark = '最多 200 字';
  const hasError = Object.keys(errors).length > 0;
  const set = (k, v) => {
    setForm(f => ({
      ...f,
      [k]: v
    }));
    setDirty(true);
  };
  const tryClose = () => {
    if (dirty) setConfirmCancel(true);else onClose();
  };
  const field = (label, k, hint, child) => /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 6,
      fontSize: 13,
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", null, label), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)',
      fontWeight: 400,
      fontSize: 12
    }
  }, hint)), child, touched[k] && errors[k] && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: 12,
      color: 'var(--error-500)'
    }
  }, errors[k]));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Drawer, {
    open: open,
    onClose: tryClose,
    title: mode === 'edit' ? '编辑店铺' : '新增店铺',
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-secondary",
      onClick: tryClose
    }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      disabled: hasError,
      onClick: () => onSave(form)
    }, "\u4FDD\u5B58"))
  }, field('店名 *', 'shortName', `${form.shortName.length}/30`, /*#__PURE__*/React.createElement("input", {
    className: `input ${touched.shortName && errors.shortName ? 'error' : ''}`,
    value: form.shortName,
    onChange: e => set('shortName', e.target.value),
    onBlur: () => setTouched(t => ({
      ...t,
      shortName: true
    })),
    placeholder: "\u4F8B\uFF1Astarry"
  })), field('会社名（日文）*', 'companyName', `${form.companyName.length}/60`, /*#__PURE__*/React.createElement("input", {
    className: `input ${touched.companyName && errors.companyName ? 'error' : ''}`,
    style: {
      fontFamily: 'var(--font-jp)'
    },
    value: form.companyName,
    onChange: e => set('companyName', e.target.value),
    onBlur: () => setTouched(t => ({
      ...t,
      companyName: true
    })),
    placeholder: "\u4F8B\uFF1AStarry Flow Spa \u30B9\u30BF\u30EA\u30FC\u30D5\u30ED\u30FC\u30B9\u30D1"
  })), field('缩写代码 *', 'code', '3-4 位大写字母/数字', /*#__PURE__*/React.createElement("input", {
    className: `input ${touched.code && errors.code ? 'error' : ''}`,
    style: {
      fontFamily: 'var(--font-mono)',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    value: form.code,
    onChange: e => set('code', e.target.value.toUpperCase()),
    onBlur: () => setTouched(t => ({
      ...t,
      code: true
    })),
    placeholder: "\u4F8B\uFF1ASTA",
    maxLength: 4
  })), field('默认案件名', 'defaultItemName', `${form.defaultItemName.length}/30`, /*#__PURE__*/React.createElement("input", {
    className: `input ${touched.defaultItemName && errors.defaultItemName ? 'error' : ''}`,
    style: {
      fontFamily: 'var(--font-jp)'
    },
    value: form.defaultItemName,
    onChange: e => set('defaultItemName', e.target.value),
    onBlur: () => setTouched(t => ({
      ...t,
      defaultItemName: true
    })),
    placeholder: "\u4F8B\uFF1A\u696D\u52D9\u59D4\u8A17\u30B5\u30FC\u30D3\u30B9\u6599"
  })), field('备注', 'remark', `${form.remark.length}/200`, /*#__PURE__*/React.createElement("textarea", {
    className: `input ${touched.remark && errors.remark ? 'error' : ''}`,
    rows: 3,
    value: form.remark,
    onChange: e => set('remark', e.target.value),
    onBlur: () => setTouched(t => ({
      ...t,
      remark: true
    })),
    placeholder: "\u9009\u586B"
  }))), /*#__PURE__*/React.createElement(Confirm, {
    open: confirmCancel,
    title: "\u653E\u5F03\u4FEE\u6539\uFF1F",
    body: "\u5F53\u524D\u7F16\u8F91\u5C1A\u672A\u4FDD\u5B58\uFF0C\u786E\u8BA4\u653E\u5F03\u5417\uFF1F",
    confirmText: "\u653E\u5F03",
    danger: true,
    onCancel: () => setConfirmCancel(false),
    onConfirm: () => {
      setConfirmCancel(false);
      onClose();
    }
  }));
};
const ImportModal = ({
  open,
  onClose,
  onImport
}) => {
  const [step, setStep] = React.useState(0); // 0=upload, 1=preview, 2=done
  const [file, setFile] = React.useState(null);
  React.useEffect(() => {
    if (open) {
      setStep(0);
      setFile(null);
    }
  }, [open]);
  const mockPreview = [{
    row: 1,
    status: 'new',
    shortName: 'gentle wave',
    companyName: 'Gentle Wave Spa ジェントルウェーブ',
    code: 'GEW'
  }, {
    row: 2,
    status: 'update',
    shortName: 'starry',
    companyName: 'Starry Flow Spa スタリーフロースパ',
    code: 'STA'
  }, {
    row: 3,
    status: 'new',
    shortName: 'AOI Relax',
    companyName: '株式会社AOI',
    code: 'AOI'
  }, {
    row: 4,
    status: 'error',
    shortName: '',
    companyName: 'XYZ',
    code: 'XY',
    error: '缩写须 3-4 位'
  }];
  return /*#__PURE__*/React.createElement(Modal, {
    open: open,
    onClose: onClose,
    title: "\u6279\u91CF\u5BFC\u5165\u5E97\u94FA",
    width: 680,
    footer: step === 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-secondary",
      onClick: onClose
    }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      disabled: !file,
      onClick: () => setStep(1)
    }, "\u4E0B\u4E00\u6B65")) : step === 1 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-secondary",
      onClick: () => setStep(0)
    }, "\u8FD4\u56DE"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      onClick: () => {
        onImport(mockPreview.filter(r => r.status !== 'error'));
        onClose();
      }
    }, "\u786E\u8BA4\u5BFC\u5165 (", mockPreview.filter(r => r.status !== 'error').length, " \u6761)")) : null
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, step === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16,
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, "1. \u4E0B\u8F7D Excel \u6A21\u677F\u586B\u5199\u5E97\u94FA\u4FE1\u606F", /*#__PURE__*/React.createElement("br", null), "2. \u4E0A\u4F20\u586B\u5199\u597D\u7684 Excel \u6587\u4EF6"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary btn-sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download",
    size: 14
  }), " \u4E0B\u8F7D\u6A21\u677F")), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      border: `2px dashed ${file ? 'var(--primary-500)' : 'var(--border-strong)'}`,
      borderRadius: 8,
      padding: 40,
      textAlign: 'center',
      cursor: 'pointer',
      background: file ? 'var(--primary-50)' : '#FAFAFA'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "file",
    style: {
      display: 'none'
    },
    accept: ".xlsx,.xls",
    onChange: e => setFile(e.target.files[0])
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "upload",
    size: 32,
    color: file ? 'var(--primary-500)' : 'var(--text-tertiary)'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontSize: 14,
      fontWeight: 500
    }
  }, file ? file.name : '点击或拖拽 Excel 文件到此处'), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: 12,
      color: 'var(--text-tertiary)'
    }
  }, "\u652F\u6301 .xlsx / .xls \u683C\u5F0F"))), step === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12,
      display: 'flex',
      gap: 12,
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag tag-green"
  }, "\u65B0\u589E ", mockPreview.filter(r => r.status === 'new').length), /*#__PURE__*/React.createElement("span", {
    className: "tag tag-orange"
  }, "\u66F4\u65B0 ", mockPreview.filter(r => r.status === 'update').length), /*#__PURE__*/React.createElement("span", {
    className: "tag tag-red"
  }, "\u9519\u8BEF ", mockPreview.filter(r => r.status === 'error').length)), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border)',
      borderRadius: 6,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl",
    style: {
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: 50
    }
  }, "\u884C"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 80
    }
  }, "\u72B6\u6001"), /*#__PURE__*/React.createElement("th", null, "\u5E97\u540D"), /*#__PURE__*/React.createElement("th", null, "\u4F1A\u793E\u540D"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 70
    }
  }, "\u7F29\u5199"))), /*#__PURE__*/React.createElement("tbody", null, mockPreview.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.row,
    style: r.status === 'error' ? {
      background: 'var(--error-50)'
    } : null
  }, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, r.row), /*#__PURE__*/React.createElement("td", null, r.status === 'new' && /*#__PURE__*/React.createElement("span", {
    className: "tag tag-green"
  }, "\u65B0\u5EFA"), r.status === 'update' && /*#__PURE__*/React.createElement("span", {
    className: "tag tag-orange"
  }, "\u66F4\u65B0"), r.status === 'error' && /*#__PURE__*/React.createElement("span", {
    className: "tag tag-red"
  }, "\u9519\u8BEF")), /*#__PURE__*/React.createElement("td", null, r.shortName || '—'), /*#__PURE__*/React.createElement("td", {
    style: {
      fontFamily: 'var(--font-jp)'
    }
  }, r.companyName), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, r.code), r.error && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--error-500)'
    }
  }, r.error))))))))));
};
const PageStores = ({
  stores,
  setStores
}) => {
  const toast = useToast();
  const [search, setSearch] = React.useState('');
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [drawerMode, setDrawerMode] = React.useState('new');
  const [drawerInitial, setDrawerInitial] = React.useState(null);
  const [importOpen, setImportOpen] = React.useState(false);
  const [delTarget, setDelTarget] = React.useState(null);
  const [delConfirmText, setDelConfirmText] = React.useState('');
  const [detailStore, setDetailStore] = React.useState(null);
  const filtered = stores.filter(s => !search || s.shortName.toLowerCase().includes(search.toLowerCase()) || s.companyName.toLowerCase().includes(search.toLowerCase()) || s.code.toLowerCase().includes(search.toLowerCase()));
  const openNew = () => {
    setDrawerMode('new');
    setDrawerInitial(null);
    setDrawerOpen(true);
  };
  const openEdit = s => {
    setDrawerMode('edit');
    setDrawerInitial(s);
    setDrawerOpen(true);
  };
  const save = form => {
    if (drawerMode === 'new') {
      const id = 's' + Math.random().toString(36).slice(2, 7);
      setStores(arr => [...arr, {
        ...form,
        id,
        createdAt: '2026-05-09'
      }]);
      toast.push(`已添加「${form.shortName}」`, 'success');
    } else {
      setStores(arr => arr.map(s => s.id === drawerInitial.id ? {
        ...s,
        ...form
      } : s));
      toast.push(`已更新「${form.shortName}」`, 'success');
    }
    setDrawerOpen(false);
  };
  const doDelete = () => {
    setStores(arr => arr.filter(s => s.id !== delTarget.id));
    toast.push(`已删除「${delTarget.shortName}」`, 'success');
    setDelTarget(null);
    setDelConfirmText('');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fade-in",
    "data-screen-label": "02 Stores"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      margin: 0,
      marginBottom: 6
    }
  }, "\u5E97\u94FA\u7BA1\u7406"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, "\u7EF4\u62A4\u5F00\u7968\u5E97\u94FA\u53CA\u5176\u4F1A\u793E\u4FE1\u606F")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 240
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      top: '50%',
      transform: 'translateY(-50%)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 14,
    color: "var(--text-tertiary)"
  })), /*#__PURE__*/React.createElement("input", {
    className: "input",
    style: {
      paddingLeft: 34
    },
    placeholder: "\u641C\u7D22\u5E97\u540D/\u7F29\u5199",
    value: search,
    onChange: e => setSearch(e.target.value)
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary",
    onClick: () => setImportOpen(true)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "upload",
    size: 14
  }), " \u6279\u91CF\u5BFC\u5165"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: openNew
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 14
  }), " \u65B0\u589E\u5E97\u94FA"))), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: 60
    }
  }, "#"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 180
    }
  }, "\u5E97\u540D"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 320
    }
  }, "\u4F1A\u793E\u540D"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 110
    }
  }, "\u7F29\u5199\u4EE3\u7801"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 110,
      textAlign: 'right'
    }
  }, "\u8BF7\u6C42\u4E66\u6570"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 140
    }
  }, "\u521B\u5EFA\u65F6\u95F4"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 220
    }
  }, "\u64CD\u4F5C"))), /*#__PURE__*/React.createElement("tbody", null, filtered.map((s, i) => {
    const count = typeof HISTORY !== 'undefined' && HISTORY ? HISTORY.filter(h => h.storeId === s.id).length : 0;
    return /*#__PURE__*/React.createElement("tr", {
      key: s.id,
      style: {
        cursor: 'pointer'
      },
      onClick: () => setDetailStore(s)
    }, /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: {
        color: 'var(--text-tertiary)'
      }
    }, i + 1), /*#__PURE__*/React.createElement("td", {
      style: {
        fontWeight: 500
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--primary-500)'
      }
    }, s.shortName)), /*#__PURE__*/React.createElement("td", {
      style: {
        fontFamily: 'var(--font-jp)',
        color: 'var(--text-secondary)'
      }
    }, s.companyName), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "num",
      style: {
        padding: '4px 10px',
        background: '#F1F5F9',
        color: 'var(--text-primary)',
        borderRadius: 4,
        fontWeight: 600,
        fontSize: 12
      }
    }, s.code)), /*#__PURE__*/React.createElement("td", {
      className: "amt-cell",
      style: {
        fontWeight: 500
      }
    }, count > 0 ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--primary-500)'
      }
    }, count, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: 'var(--text-tertiary)',
        fontWeight: 400
      }
    }, "\u4EFD")) : /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-tertiary)'
      }
    }, "\u2014")), /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: {
        color: 'var(--text-secondary)'
      }
    }, s.createdAt), /*#__PURE__*/React.createElement("td", {
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost btn-sm",
      onClick: () => setDetailStore(s)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "folder",
      size: 13
    }), " \u67E5\u770B\u8BF7\u6C42\u4E66"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost btn-sm",
      onClick: () => openEdit(s)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "edit",
      size: 13
    }), " \u7F16\u8F91"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost btn-sm",
      style: {
        color: 'var(--error-500)'
      },
      onClick: () => setDelTarget(s)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "trash",
      size: 13
    }), " \u5220\u9664"))));
  }), filtered.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 7
  }, /*#__PURE__*/React.createElement(Empty, {
    title: "\u672A\u627E\u5230\u5339\u914D\u7684\u5E97\u94FA",
    body: "\u5C1D\u8BD5\u8C03\u6574\u641C\u7D22\u5173\u952E\u8BCD"
  })))))), /*#__PURE__*/React.createElement(StoreDrawer, {
    open: drawerOpen,
    mode: drawerMode,
    initial: drawerInitial,
    allStores: stores,
    onClose: () => setDrawerOpen(false),
    onSave: save
  }), /*#__PURE__*/React.createElement(StoreDetail, {
    open: !!detailStore,
    store: detailStore,
    onClose: () => setDetailStore(null)
  }), /*#__PURE__*/React.createElement(ImportModal, {
    open: importOpen,
    onClose: () => setImportOpen(false),
    onImport: rows => {
      setStores(arr => [...arr, ...rows.map(r => ({
        shortName: r.shortName,
        companyName: r.companyName,
        code: r.code,
        defaultItemName: '業務委託サービス料',
        remark: '',
        id: 's' + Math.random().toString(36).slice(2, 7),
        createdAt: new Date().toISOString().slice(0, 10)
      }))]);
      toast.push(`已导入 ${rows.length} 条`, 'success');
    }
  }), /*#__PURE__*/React.createElement(Modal, {
    open: !!delTarget,
    onClose: () => {
      setDelTarget(null);
      setDelConfirmText('');
    },
    title: "\u5220\u9664\u5E97\u94FA",
    width: 440,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-secondary",
      onClick: () => {
        setDelTarget(null);
        setDelConfirmText('');
      }
    }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-danger",
      disabled: delConfirmText !== '删除',
      onClick: doDelete
    }, "\u786E\u8BA4\u5220\u9664"))
  }, delTarget && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      fontSize: 14,
      color: 'var(--text-secondary)',
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, "\u786E\u5B9A\u5220\u9664\u5E97\u94FA ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-primary)'
    }
  }, "\u300C", delTarget.shortName, "\u300D"), "\uFF1F"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      background: 'var(--warning-50)',
      border: '1px solid #FCD34D',
      borderRadius: 6,
      fontSize: 13,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert",
    size: 14,
    color: "var(--warning-500)",
    style: {
      verticalAlign: 'middle',
      marginRight: 6
    }
  }), "\u5220\u9664\u540E\u5C06\u65E0\u6CD5\u751F\u6210\u6B64\u5E97\u94FA\u7684\u65B0\u8BF7\u6C42\u4E66\uFF0C", /*#__PURE__*/React.createElement("strong", null, "\u5386\u53F2\u8BB0\u5F55\u4F1A\u4FDD\u7559"), "\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 6,
      fontSize: 13
    }
  }, "\u8BF7\u8F93\u5165\u300C", /*#__PURE__*/React.createElement("strong", null, "\u5220\u9664"), "\u300D\u786E\u8BA4\u64CD\u4F5C\uFF1A"), /*#__PURE__*/React.createElement("input", {
    className: "input",
    value: delConfirmText,
    onChange: e => setDelConfirmText(e.target.value),
    placeholder: "\u8F93\u5165\u300C\u5220\u9664\u300D"
  }))));
};
window.PageStores = PageStores;
;
// Page C: History

const PageHistory = ({
  stores,
  history
}) => {
  const toast = useToast();
  const [startMonth, setStartMonth] = React.useState('2026-01');
  const [endMonth, setEndMonth] = React.useState('2026-05');
  const [storeFilter, setStoreFilter] = React.useState(stores.map(s => s.id));
  const [search, setSearch] = React.useState('');
  const [preview, setPreview] = React.useState(null);
  const [editor, setEditor] = React.useState(null);
  const records = history.filter(h => {
    if (h.yearMonth < startMonth || h.yearMonth > endMonth) return false;
    if (!storeFilter.includes(h.storeId)) return false;
    if (search) {
      const s = stores.find(x => x.id === h.storeId);
      const ok = h.invoiceNo.toLowerCase().includes(search.toLowerCase()) || s.shortName.toLowerCase().includes(search.toLowerCase());
      if (!ok) return false;
    }
    return true;
  });
  const thisMonthRecords = history.filter(h => h.generatedAt.startsWith('2026-04'));
  const thisMonthCount = thisMonthRecords.length;
  const thisMonthTotal = thisMonthRecords.reduce((s, h) => s + h.amountIncTax, 0);
  const lastMonthCount = history.filter(h => h.generatedAt.startsWith('2026-03')).length;
  const fmtMonthRange = h => {
    if (h.months && h.months.length > 1) {
      const first = h.months[0].yearMonth;
      const last = h.months[h.months.length - 1].yearMonth;
      return `${fmtYM_jp(first)}～${fmtYM_jp(last)}`;
    }
    if (h.months && h.months.length === 1) return fmtYM_jp(h.months[0].yearMonth);
    return fmtYM_jp(h.yearMonth);
  };
  const handlePrintSingle = h => {
    const store = stores.find(x => x.id === h.storeId);
    const hasMonths = h.months && h.months.length > 0;
    window.printInvoices([{
      storeId: h.storeId,
      invoiceNo: h.invoiceNo,
      issueDate: h.issueDate,
      yearMonth: h.yearMonth,
      itemName: h.itemName || `業務委託サービス料（${fmtYM_jp(h.yearMonth)}）`,
      amount: h.amountIncTax,
      months: hasMonths ? h.months : null,
      receiverName: h.receiverName,
      quantity: h.quantity,
      taxRate: h.taxRate ?? 0.1,
      taxMethod: h.taxMethod || 'round',
      showSeal: h.showSeal !== false,
      variant: h.variant || 'final'
    }]);
    toast.push(`正在打印 ${h.invoiceNo}.pdf`, 'info');
  };
  const handleExportZip = () => {
    if (records.length === 0) return;
    window.printInvoices(records.map(h => {
      const store = stores.find(x => x.id === h.storeId);
      const hasMonths = h.months && h.months.length > 0;
      return {
        storeId: h.storeId,
        invoiceNo: h.invoiceNo,
        issueDate: h.issueDate,
        yearMonth: h.yearMonth,
        itemName: h.itemName || `業務委託サービス料（${fmtYM_jp(h.yearMonth)}）`,
        amount: h.amountIncTax,
        months: hasMonths ? h.months : null,
        receiverName: h.receiverName,
        quantity: h.quantity,
        taxRate: h.taxRate ?? 0.1,
        taxMethod: h.taxMethod || 'round',
        showSeal: h.showSeal !== false,
        variant: h.variant || 'final'
      };
    }));
    toast.push(`正在打印 ${records.length} 份请求书 — 在打印对话框中选择「另存为 PDF」即可`, 'info');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fade-in",
    "data-screen-label": "03 History"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      margin: 0,
      marginBottom: 6
    }
  }, "\u5386\u53F2\u8BB0\u5F55"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, "\u67E5\u8BE2\u548C\u56DE\u770B\u5DF2\u751F\u6210\u7684\u8BF7\u6C42\u4E66")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card stat-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-label"
  }, "\u672C\u6708\u5DF2\u751F\u6210"), /*#__PURE__*/React.createElement("div", {
    className: "stat-value"
  }, thisMonthCount, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      color: 'var(--text-secondary)',
      fontWeight: 500
    }
  }, "\u4EFD")), /*#__PURE__*/React.createElement("div", {
    className: "stat-sub"
  }, "\u8F83\u4E0A\u6708 ", thisMonthCount >= lastMonthCount ? '+' : '', thisMonthCount - lastMonthCount)), /*#__PURE__*/React.createElement("div", {
    className: "card stat-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-label"
  }, "\u672C\u6708\u603B\u91D1\u989D"), /*#__PURE__*/React.createElement("div", {
    className: "stat-value"
  }, fmtYen(thisMonthTotal)), /*#__PURE__*/React.createElement("div", {
    className: "stat-sub"
  }, "\u542B\u7A0E\u5408\u8BA1")), /*#__PURE__*/React.createElement("div", {
    className: "card stat-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-label"
  }, "\u7D2F\u8BA1\u8BF7\u6C42\u4E66"), /*#__PURE__*/React.createElement("div", {
    className: "stat-value"
  }, history.length, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      color: 'var(--text-secondary)',
      fontWeight: 500
    }
  }, "\u4EFD")), /*#__PURE__*/React.createElement("div", {
    className: "stat-sub"
  }, "\u81EA\u7CFB\u7EDF\u542F\u7528"))), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)',
      marginBottom: 6
    }
  }, "\u5F00\u59CB\u6708\u4EFD"), /*#__PURE__*/React.createElement(MonthPicker, {
    value: startMonth,
    onChange: setStartMonth,
    width: 160
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 8,
      color: 'var(--text-tertiary)'
    }
  }, "\u2014"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)',
      marginBottom: 6
    }
  }, "\u7ED3\u675F\u6708\u4EFD"), /*#__PURE__*/React.createElement(MonthPicker, {
    value: endMonth,
    onChange: setEndMonth,
    width: 160
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)',
      marginBottom: 6
    }
  }, "\u5E97\u94FA"), /*#__PURE__*/React.createElement(MultiStoreSelect, {
    stores: stores,
    selected: storeFilter,
    onChange: setStoreFilter,
    width: 280
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)',
      marginBottom: 6
    }
  }, "\u641C\u7D22"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      top: '50%',
      transform: 'translateY(-50%)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 14,
    color: "var(--text-tertiary)"
  })), /*#__PURE__*/React.createElement("input", {
    className: "input",
    style: {
      paddingLeft: 34
    },
    placeholder: "\u7F16\u53F7\u6216\u5E97\u94FA\u540D",
    value: search,
    onChange: e => setSearch(e.target.value)
  }))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary",
    onClick: handleExportZip,
    disabled: records.length === 0
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "package",
    size: 14
  }), " \u6253\u5370\u7B5B\u9009\u7ED3\u679C"))), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      overflow: 'hidden'
    }
  }, records.length === 0 ? /*#__PURE__*/React.createElement(Empty, {
    title: "\u6CA1\u6709\u5339\u914D\u7684\u8BB0\u5F55",
    body: "\u5C1D\u8BD5\u8C03\u6574\u7B5B\u9009\u6761\u4EF6\u6216\u6708\u4EFD\u8303\u56F4"
  }) : /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: 200
    }
  }, "\u8BF7\u6C42\u4E66\u7F16\u53F7"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 160
    }
  }, "\u5E97\u94FA"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 120
    }
  }, "\u4E1A\u52A1\u6708\u4EFD"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 140,
      textAlign: 'right'
    }
  }, "\u542B\u7A0E\u91D1\u989D"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 130
    }
  }, "\u8BF7\u6C42\u65E5"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 170
    }
  }, "\u751F\u6210\u65F6\u95F4"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 240
    }
  }, "\u64CD\u4F5C"))), /*#__PURE__*/React.createElement("tbody", null, records.map(h => {
    const s = stores.find(x => x.id === h.storeId);
    return /*#__PURE__*/React.createElement("tr", {
      key: h.id
    }, /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: {
        fontWeight: 500
      }
    }, h.invoiceNo), /*#__PURE__*/React.createElement("td", null, s ? s.shortName : '—'), /*#__PURE__*/React.createElement("td", null, fmtMonthRange(h)), /*#__PURE__*/React.createElement("td", {
      className: "amt-cell",
      style: {
        fontWeight: 500
      }
    }, fmtYen(h.amountIncTax)), /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: {
        color: 'var(--text-secondary)'
      }
    }, h.issueDate), /*#__PURE__*/React.createElement("td", {
      className: "num",
      style: {
        color: 'var(--text-secondary)'
      }
    }, h.generatedAt), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost btn-sm",
      onClick: () => setEditor({
        ...h,
        store: s
      })
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "edit",
      size: 13
    }), " \u7F16\u8F91"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost btn-sm",
      onClick: () => setPreview({
        ...h,
        store: s
      })
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "eye",
      size: 13
    }), " \u9884\u89C8"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost btn-sm",
      onClick: () => handlePrintSingle(h)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 13
    }), " \u4E0B\u8F7D"))));
  })))), /*#__PURE__*/React.createElement(Modal, {
    open: !!preview,
    onClose: () => setPreview(null),
    title: "\u8BF7\u6C42\u4E66\u9884\u89C8",
    width: 920,
    headerExtra: /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary btn-sm",
      onClick: () => {
        if (preview) {
          handlePrintSingle(preview);
          setPreview(null);
        }
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 14
    }), " \u6253\u5370 PDF")
  }, preview && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      background: 'linear-gradient(180deg, #F8FAFC 0%, #EEF2F7 100%)'
    }
  }, /*#__PURE__*/React.createElement(InvoicePDF, {
    store: preview.store,
    invoiceNo: preview.invoiceNo,
    issueDate: preview.issueDate,
    yearMonth: preview.yearMonth,
    itemName: preview.itemName || `業務委託サービス料（${fmtYM_jp(preview.yearMonth)}）`,
    amountIncTax: preview.amountIncTax,
    months: preview.months || null
  }))), /*#__PURE__*/React.createElement(InvoiceEditor, {
    open: !!editor,
    onClose: () => setEditor(null),
    stores: stores,
    initial: editor ? {
      storeId: editor.storeId,
      invoiceNo: editor.invoiceNo,
      issueDate: editor.issueDate,
      yearMonth: editor.yearMonth,
      itemName: editor.itemName || `業務委託サービス料（${fmtYM_jp(editor.yearMonth)}）`,
      amount: editor.amountIncTax,
      months: editor.months && editor.months.length > 0 ? editor.months : [{
        yearMonth: editor.yearMonth,
        amount: editor.amountIncTax
      }],
      quantity: editor.quantity || '1式',
      taxRate: editor.taxRate ?? 0.1,
      taxMethod: editor.taxMethod || 'round',
      taxNote: editor.taxNote || '',
      showSeal: editor.showSeal !== false,
      variant: editor.variant || 'final',
      status: 'generated'
    } : null,
    onSave: () => toast.push('草稿已保存', 'success'),
    onGenerate: data => {
      setEditor(null);
      const invNo = data.invoiceNo || editor.invoiceNo;
      const monthsArr = data.months ? data.months.filter(m => m.amount > 0) : [];
      window.printInvoices([{
        storeId: data.storeId,
        invoiceNo: invNo,
        issueDate: data.issueDate,
        yearMonth: data.yearMonth,
        itemName: data.itemName,
        amount: data.amount,
        months: monthsArr.length > 0 ? monthsArr : null,
        receiverName: data.receiverName,
        quantity: data.quantity,
        taxRate: data.taxRate,
        taxMethod: data.taxMethod,
        showSeal: data.showSeal,
        variant: data.variant
      }]);
      toast.push(`正在打印 ${invNo}.pdf`, 'info');
    }
  }));
};
window.PageHistory = PageHistory;
;
// StoreDetailDrawer — shows all invoices for a single store, with stats

const StoreDetail = ({
  open,
  store,
  onClose,
  allStores
}) => {
  const toast = useToast();
  const [search, setSearch] = React.useState('');
  const [yearFilter, setYearFilter] = React.useState('all');
  const [preview, setPreview] = React.useState(null);
  if (!store) return null;
  const records = HISTORY.filter(h => h.storeId === store.id);
  const years = [...new Set(records.map(h => h.yearMonth.slice(0, 4)))].sort().reverse();
  const fmtMonthRange = h => {
    if (h.months && h.months.length > 1) {
      const first = h.months[0].yearMonth;
      const last = h.months[h.months.length - 1].yearMonth;
      return `${fmtYM_jp(first)}～${fmtYM_jp(last)}`;
    }
    if (h.months && h.months.length === 1) return fmtYM_jp(h.months[0].yearMonth);
    return fmtYM_jp(h.yearMonth);
  };
  const filtered = records.filter(h => {
    if (yearFilter !== 'all' && !h.yearMonth.startsWith(yearFilter)) return false;
    if (search && !h.invoiceNo.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });
  const totalAmount = records.reduce((s, h) => s + h.amountIncTax, 0);
  const last = records[0];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Modal, {
    open: open,
    onClose: onClose,
    width: 1100,
    title: null,
    headerExtra: null
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 28px 20px',
      background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
      color: '#fff',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      position: 'absolute',
      top: 16,
      right: 16,
      width: 32,
      height: 32,
      border: 'none',
      background: 'rgba(255,255,255,0.15)',
      borderRadius: 6,
      color: '#fff',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 18,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 12,
      background: 'rgba(255,255,255,0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: '0.05em'
    }
  }, store.code), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      marginBottom: 4
    }
  }, store.shortName), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      opacity: 0.85,
      fontFamily: 'var(--font-jp)'
    }
  }, store.companyName))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      marginTop: 24,
      paddingTop: 20,
      borderTop: '1px solid rgba(255,255,255,0.2)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: 0.7,
      marginBottom: 4
    }
  }, "\u7D2F\u8BA1\u8BF7\u6C42\u4E66"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      fontFamily: 'var(--font-mono)'
    }
  }, records.length, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      opacity: 0.7,
      fontWeight: 500
    }
  }, "\u4EFD"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: 0.7,
      marginBottom: 4
    }
  }, "\u7D2F\u8BA1\u91D1\u989D\uFF08\u542B\u7A0E\uFF09"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      fontFamily: 'var(--font-mono)'
    }
  }, fmtYen(totalAmount))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: 0.7,
      marginBottom: 4
    }
  }, "\u6700\u8FD1\u8BF7\u6C42\u4E66"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      fontFamily: 'var(--font-mono)'
    }
  }, last ? last.invoiceNo : '—'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: 0.7,
      marginTop: 2
    }
  }, last ? last.generatedAt : '')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: 0.7,
      marginBottom: 4
    }
  }, "\u521B\u5EFA\u65E5\u671F"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      fontFamily: 'var(--font-mono)'
    }
  }, store.createdAt)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 28px',
      borderBottom: '1px solid var(--border)',
      background: '#F8FAFC'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 280
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      top: '50%',
      transform: 'translateY(-50%)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 14,
    color: "var(--text-tertiary)"
  })), /*#__PURE__*/React.createElement("input", {
    className: "input",
    style: {
      paddingLeft: 34
    },
    placeholder: "\u641C\u7D22\u8BF7\u6C42\u4E66\u7F16\u53F7",
    value: search,
    onChange: e => setSearch(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      padding: 4,
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setYearFilter('all'),
    style: tabBtn(yearFilter === 'all')
  }, "\u5168\u90E8"), years.map(y => /*#__PURE__*/React.createElement("button", {
    key: y,
    onClick: () => setYearFilter(y),
    style: tabBtn(yearFilter === y)
  }, y, "\u5E74"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, "\u5171 ", /*#__PURE__*/React.createElement("strong", {
    className: "num",
    style: {
      color: 'var(--text-primary)'
    }
  }, filtered.length), " \u6761"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary btn-sm",
    disabled: filtered.length === 0,
    onClick: () => {
      window.printInvoices(filtered.map(h => ({
        storeId: h.storeId,
        invoiceNo: h.invoiceNo,
        issueDate: h.issueDate,
        yearMonth: h.yearMonth,
        itemName: h.itemName || `業務委託サービス料（${fmtYM_jp(h.yearMonth)}）`,
        amount: h.amountIncTax,
        months: h.months || null
      })));
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download",
    size: 13
  }), " \u5168\u90E8\u4E0B\u8F7D"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0',
      maxHeight: 'calc(90vh - 280px)',
      overflow: 'auto'
    }
  }, filtered.length === 0 ? /*#__PURE__*/React.createElement(Empty, {
    title: "\u8BE5\u5E97\u94FA\u6682\u65E0\u8BF7\u6C42\u4E66\u8BB0\u5F55",
    body: "\u53EF\u5728\u8BF7\u6C42\u4E66\u751F\u6210\u9875\u4E3A\u6B64\u5E97\u94FA\u5F00\u5177\u8BF7\u6C42\u4E66"
  }) : /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: 200
    }
  }, "\u8BF7\u6C42\u4E66\u7F16\u53F7"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 160
    }
  }, "\u4E1A\u52A1\u6708\u4EFD"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 140,
      textAlign: 'right'
    }
  }, "\u542B\u7A0E\u91D1\u989D"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 130
    }
  }, "\u8BF7\u6C42\u65E5"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 170
    }
  }, "\u751F\u6210\u65F6\u95F4"), /*#__PURE__*/React.createElement("th", null, "\u64CD\u4F5C"))), /*#__PURE__*/React.createElement("tbody", null, filtered.map(h => /*#__PURE__*/React.createElement("tr", {
    key: h.id
  }, /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      fontWeight: 500
    }
  }, h.invoiceNo), /*#__PURE__*/React.createElement("td", null, fmtMonthRange(h)), /*#__PURE__*/React.createElement("td", {
    className: "amt-cell",
    style: {
      fontWeight: 500
    }
  }, fmtYen(h.amountIncTax)), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      color: 'var(--text-secondary)'
    }
  }, h.issueDate), /*#__PURE__*/React.createElement("td", {
    className: "num",
    style: {
      color: 'var(--text-secondary)'
    }
  }, h.generatedAt), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    onClick: () => setPreview({
      ...h,
      store
    })
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "eye",
    size: 13
  }), " \u9884\u89C8"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    onClick: () => {
      window.printInvoices([{
        storeId: h.storeId,
        invoiceNo: h.invoiceNo,
        issueDate: h.issueDate,
        yearMonth: h.yearMonth,
        itemName: h.itemName || `業務委託サービス料（${fmtYM_jp(h.yearMonth)}）`,
        amount: h.amountIncTax,
        months: h.months || null
      }]);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download",
    size: 13
  }), " \u4E0B\u8F7D"))))))))), /*#__PURE__*/React.createElement(Modal, {
    open: !!preview,
    onClose: () => setPreview(null),
    title: "\u8BF7\u6C42\u4E66\u9884\u89C8",
    width: 920,
    headerExtra: /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary btn-sm",
      onClick: () => {
        if (preview) {
          window.printInvoices([{
            storeId: preview.storeId,
            invoiceNo: preview.invoiceNo,
            issueDate: preview.issueDate,
            yearMonth: preview.yearMonth,
            itemName: preview.itemName || `業務委託サービス料（${fmtYM_jp(preview.yearMonth)}）`,
            amount: preview.amountIncTax,
            months: preview.months || null
          }]);
        }
        setPreview(null);
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 14
    }), " \u4E0B\u8F7D PDF")
  }, preview && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      background: 'linear-gradient(180deg, #F8FAFC 0%, #EEF2F7 100%)'
    }
  }, /*#__PURE__*/React.createElement(InvoicePDF, {
    store: preview.store,
    invoiceNo: preview.invoiceNo,
    issueDate: preview.issueDate,
    yearMonth: preview.yearMonth,
    itemName: preview.itemName || `業務委託サービス料（${fmtYM_jp(preview.yearMonth)}）`,
    amountIncTax: preview.amountIncTax,
    months: preview.months || null
  }))));
};
const tabBtn = active => ({
  height: 28,
  padding: '0 12px',
  border: 'none',
  borderRadius: 4,
  background: active ? 'var(--primary-500)' : 'transparent',
  color: active ? '#fff' : 'var(--text-secondary)',
  fontSize: 12,
  fontWeight: active ? 600 : 500,
  cursor: 'pointer',
  transition: 'all 150ms'
});
window.StoreDetail = StoreDetail;
;
// App shell — sidebar nav + top bar + page router

const TWEAKS_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentColor": "#1E40AF",
  "navWidth": 220,
  "compactRows": false
} /*EDITMODE-END*/;
const App = () => {
  // ----- auth gate -----
  React.useEffect(() => {
    if (!localStorage.getItem('auth_token')) {
      localStorage.setItem('auth_token', 'demo-token');
      localStorage.setItem('auth_user', JSON.stringify({
        name: '朱逸骁',
        email: 'eason@kaipu.jp',
        role: '运营'
      }));
    }
  }, []);
  const [authUser, setAuthUser] = React.useState(() => {
    const token = localStorage.getItem('auth_token');
    if (!token) return {
      name: '朱逸骁',
      email: 'eason@kaipu.jp',
      role: '运营'
    };
    try {
      return JSON.parse(localStorage.getItem('auth_user') || 'null') || {
        name: '朱逸骁',
        email: 'eason@kaipu.jp',
        role: '运营'
      };
    } catch {
      return {
        name: '朱逸骁',
        email: 'eason@kaipu.jp',
        role: '运营'
      };
    }
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
    const fn = e => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) setUserMenuOpen(false);
    };
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
    window.printInvoices = invoices => {
      if (!invoices || invoices.length === 0) return;
      const currentStores = storesRef.current;
      const receiver = document.getElementById('print-receiver');
      if (!receiver) return;

      // Build a single React element tree — avoids multiple ReactDOM.render race in React 18
      const sheets = invoices.map((inv, i) => {
        const store = currentStores.find(s => s.id === inv.storeId) || inv.store || {
          code: '???',
          companyName: ''
        };
        const hasMonths = inv.months && inv.months.length > 0;
        return React.createElement('div', {
          key: i,
          className: 'invoice-sheet'
        }, React.createElement(InvoicePDF, {
          store: store,
          invoiceNo: inv.invoiceNo,
          issueDate: inv.issueDate,
          yearMonth: inv.yearMonth,
          itemName: inv.itemName || (hasMonths ? `業務委託サービス料（${fmtYM_jp(inv.months[0].yearMonth)}）` : `業務委託サービス料（${fmtYM_jp(inv.yearMonth)}）`),
          amountIncTax: inv.amountIncTax !== undefined ? inv.amountIncTax : inv.amount || 0,
          months: inv.months || null,
          receiverName: inv.receiverName,
          quantity: inv.quantity || '1式',
          taxRate: inv.taxRate ?? 0.1,
          taxMethod: inv.taxMethod || 'round',
          showSeal: inv.showSeal !== false,
          variant: inv.variant || 'final'
        }));
      });
      ReactDOM.render(React.createElement('div', null, sheets), receiver);
      // React 18: callback removed, use rAF to ensure DOM commit before print
      requestAnimationFrame(() => {
        window.print();
        setTimeout(() => {
          ReactDOM.unmountComponentAtNode(receiver);
        }, 2000);
      });
    };
  }, []);

  // Add history entries (called by PageGenerate after real print)
  const addHistoryEntries = React.useCallback(entries => {
    setHistory(prev => {
      const existing = new Set(prev.map(h => h.invoiceNo));
      const toAdd = entries.filter(e => !existing.has(e.invoiceNo));
      return [...toAdd, ...prev];
    });
  }, []);
  const Sidebar = /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 220,
      background: '#fff',
      borderRight: '1px solid var(--border)',
      flexShrink: 0,
      paddingTop: 12,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: `nav-item ${page === 'generate' ? 'active' : ''}`,
    onClick: () => setPage('generate')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "doc",
    size: 18
  }), " ", /*#__PURE__*/React.createElement("span", null, "\u8BF7\u6C42\u4E66\u751F\u6210")), /*#__PURE__*/React.createElement("div", {
    className: `nav-item ${page === 'stores' ? 'active' : ''}`,
    onClick: () => setPage('stores')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "store",
    size: 18
  }), " ", /*#__PURE__*/React.createElement("span", null, "\u5E97\u94FA\u7BA1\u7406"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 11,
      padding: '1px 6px',
      background: '#F1F5F9',
      color: 'var(--text-tertiary)',
      borderRadius: 10
    },
    className: "num"
  }, stores.length)), /*#__PURE__*/React.createElement("div", {
    className: `nav-item ${page === 'history' ? 'active' : ''}`,
    onClick: () => setPage('history')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "history",
    size: 18
  }), " ", /*#__PURE__*/React.createElement("span", null, "\u5386\u53F2\u8BB0\u5F55"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 11,
      padding: '1px 6px',
      background: '#F1F5F9',
      color: 'var(--text-tertiary)',
      borderRadius: 10
    },
    className: "num"
  }, history.length))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      borderTop: '1px solid var(--border)',
      fontSize: 12,
      color: 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--success-500)'
    }
  }), /*#__PURE__*/React.createElement("span", null, "\u672C\u5730\u5B58\u50A8 \xB7 v1.0")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      marginBottom: 8
    }
  }, COMPANY.name), /*#__PURE__*/React.createElement("a", {
    href: "login.html",
    style: {
      fontSize: 11,
      color: 'var(--primary-500)',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, "\u2192 \u67E5\u770B\u767B\u5F55\u9875")));
  const TopBar = /*#__PURE__*/React.createElement("header", {
    style: {
      height: 56,
      background: '#fff',
      borderBottom: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: 'var(--primary-500)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "doc",
    size: 16,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      letterSpacing: '-0.2px'
    }
  }, "\u8BF7\u6C42\u4E66\u7CFB\u7EDF"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-tertiary)',
      padding: '2px 6px',
      background: '#F1F5F9',
      borderRadius: 4,
      fontFamily: 'var(--font-mono)'
    }
  }, "v1.0")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    style: {
      color: 'var(--text-secondary)',
      width: 32,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    ref: userMenuRef,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      cursor: 'pointer',
      padding: '4px 8px',
      borderRadius: 6
    },
    onClick: () => setUserMenuOpen(v => !v)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #1E40AF, #60A5FA)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 12,
      fontWeight: 600
    }
  }, (authUser.name || '?').slice(0, 1)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13
    }
  }, authUser.name), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron",
    size: 12,
    color: "var(--text-tertiary)"
  })), userMenuOpen && /*#__PURE__*/React.createElement("div", {
    className: "pop",
    style: {
      top: 44,
      right: 0,
      width: 240,
      padding: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 12px',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, authUser.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-tertiary)',
      marginTop: 2
    }
  }, authUser.email), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag tag-blue"
  }, authUser.role || '员工'))), /*#__PURE__*/React.createElement("div", {
    className: "pop-item",
    style: {
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user",
    size: 14,
    color: "var(--text-secondary)"
  }), " \u8D26\u53F7\u8BBE\u7F6E"), /*#__PURE__*/React.createElement("div", {
    className: "pop-item",
    style: {
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "settings",
    size: 14,
    color: "var(--text-secondary)"
  }), " \u504F\u597D"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border)',
      margin: '4px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "pop-item",
    style: {
      borderRadius: 4,
      color: 'var(--error-500)'
    },
    onClick: logout
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 14,
    color: "var(--error-500)"
  }), " \u9000\u51FA\u767B\u5F55")))));
  return /*#__PURE__*/React.createElement(ToastProvider, null, /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }
  }, TopBar, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      minHeight: 0
    }
  }, Sidebar, /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflow: 'auto',
      background: 'var(--bg-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: '0 auto',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: page === 'generate' ? 'block' : 'none'
    }
  }, /*#__PURE__*/React.createElement(PageGenerate, {
    stores: stores,
    history: history,
    onHistoryAdd: addHistoryEntries
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: page === 'stores' ? 'block' : 'none'
    }
  }, /*#__PURE__*/React.createElement(PageStores, {
    stores: stores,
    setStores: setStores
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: page === 'history' ? 'block' : 'none'
    }
  }, /*#__PURE__*/React.createElement(PageHistory, {
    stores: stores,
    history: history
  })))))));
};
ReactDOM.render(/*#__PURE__*/React.createElement(App, null), document.getElementById('root'));