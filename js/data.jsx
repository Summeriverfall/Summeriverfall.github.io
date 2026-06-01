// Mock data + helpers

const COMPANY = {
  name: 'カイプ株式会社',
  address: '京都市東山区石泉院町 394-4-201',
  bank: '三井住友銀行  四条支店  普通口座 2175677',
  accountName: 'カイプ株式会社',
  contactName: 'オウガクキ',
  contactTel: '070-9270-8795',
};

const DEFAULT_STORES = [
  { id: 's1', shortName: 'starry', companyName: 'Starry Flow Spa スタリーフロースパ', code: 'STA', defaultItemName: '業務委託サービス料', remark: '', createdAt: '2024-08-12' },
  { id: 's2', shortName: 'エフアイ株式会社', companyName: 'エフアイ株式会社', code: 'FI',  defaultItemName: '業務委託サービス料', remark: '', createdAt: '2024-09-03' },
  { id: 's3', shortName: 'FUTUREKART Osaka', companyName: '株式会社未来方程', code: 'FUT', defaultItemName: '業務委託サービス料', remark: '大阪エリア', createdAt: '2024-10-15' },
  { id: 's4', shortName: 'LUNA SPA', companyName: 'LUNA SPA', code: 'LUN', defaultItemName: '業務委託サービス料', remark: '', createdAt: '2024-11-01' },
  { id: 's5', shortName: 'SELENE SPA', companyName: '（広源商貿）㍿', code: 'SEL', defaultItemName: '業務委託サービス料', remark: '', createdAt: '2025-01-09' },
  { id: 's6', shortName: 'celestiquespa', companyName: 'STEPHANIE 株式会社', code: 'CEL', defaultItemName: '業務委託サービス料', remark: '', createdAt: '2025-02-22' },
  { id: 's7', shortName: '花の色', companyName: '花の色　リラクゼーション', code: 'HAN', defaultItemName: '業務委託サービス料', remark: '', createdAt: '2025-03-18' },
  { id: 's8', shortName: '花香(KAKO)', companyName: '花香(KAKO) Relaxation Salon', code: 'KAK', defaultItemName: '業務委託サービス料', remark: '', createdAt: '2025-04-05' },
];

const DEFAULT_HISTORY = [
  { id: 'h12', invoiceNo: '202603-STA-01', storeId: 's1', yearMonth: '2026-03', issueDate: '2026-04-04', amountIncTax: 128000, generatedAt: '2026-04-04 10:23' },
  { id: 'h11', invoiceNo: '202603-FI-01',  storeId: 's2', yearMonth: '2026-03', issueDate: '2026-04-04', amountIncTax: 96500,  generatedAt: '2026-04-04 10:23' },
  { id: 'h10', invoiceNo: '202603-FUT-01', storeId: 's3', yearMonth: '2026-03', issueDate: '2026-04-04', amountIncTax: 215000, generatedAt: '2026-04-04 10:23' },
  { id: 'h9',  invoiceNo: '202603-LUN-01', storeId: 's4', yearMonth: '2026-03', issueDate: '2026-04-04', amountIncTax: 78000,  generatedAt: '2026-04-04 10:23' },
  { id: 'h8',  invoiceNo: '202603-SEL-01', storeId: 's5', yearMonth: '2026-03', issueDate: '2026-04-04', amountIncTax: 102000, generatedAt: '2026-04-04 10:24' },
  { id: 'h7',  invoiceNo: '202603-CEL-01', storeId: 's6', yearMonth: '2026-03', issueDate: '2026-04-04', amountIncTax: 88500,  generatedAt: '2026-04-04 10:24' },
  { id: 'h6',  invoiceNo: '202603-HAN-01', storeId: 's7', yearMonth: '2026-03', issueDate: '2026-04-04', amountIncTax: 64000,  generatedAt: '2026-04-04 10:24' },
  { id: 'h5',  invoiceNo: '202603-KAK-01', storeId: 's8', yearMonth: '2026-03', issueDate: '2026-04-04', amountIncTax: 78000,  generatedAt: '2026-04-04 10:24' },
  { id: 'h4',  invoiceNo: '202602-STA-01', storeId: 's1', yearMonth: '2026-02', issueDate: '2026-03-03', amountIncTax: 112000, generatedAt: '2026-03-03 09:12' },
  { id: 'h3',  invoiceNo: '202602-FUT-01', storeId: 's3', yearMonth: '2026-02', issueDate: '2026-03-03', amountIncTax: 198000, generatedAt: '2026-03-03 09:12' },
  { id: 'h2',  invoiceNo: '202602-LUN-01', storeId: 's4', yearMonth: '2026-02', issueDate: '2026-03-03', amountIncTax: 71000,  generatedAt: '2026-03-03 09:13' },
  { id: 'h1',  invoiceNo: '202602-CEL-01', storeId: 's6', yearMonth: '2026-02', issueDate: '2026-03-03', amountIncTax: 91000,  generatedAt: '2026-03-03 09:13' },
];

// ---- localStorage persistence ----
const loadFromLS = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    if (raw) {
      const data = JSON.parse(raw);
      if (Array.isArray(data) && data.length === 0) return [...fallback]; // empty arrays are likely corruption
      return data;
    }
  } catch (e) { /* ignore corrupt data */ }
  return [...fallback]; // return copy so DEFAULT_STORES is never mutated
};
const saveToLS = (key, data) => {
  try { localStorage.setItem(key, JSON.stringify(data)); } catch (e) { /* quota exceeded */ }
};

const STORES = loadFromLS('invoice_stores', DEFAULT_STORES);
let HISTORY = loadFromLS('invoice_history', DEFAULT_HISTORY);
const persistStores = () => saveToLS('invoice_stores', STORES);
const persistHistory = () => saveToLS('invoice_history', HISTORY);

// ---- helpers ----
const TODAY = new Date(2026, 4, 9); // 2026-05-09 fixed for prototype determinism
const fmtYen = (n) => '¥' + (n || 0).toLocaleString('en-US');
const fmtYM_jp = (ym) => {
  const [y, m] = ym.split('-');
  return `${y}年${parseInt(m, 10)}月`;
};
const fmtJpDate = (d) => `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
const fmtJpDateStr = (s) => {
  const d = new Date(s);
  return fmtJpDate(d);
};
const TAX_METHODS = {
  round: { label: '四舍五入', fn: Math.round, desc: '小数点以下を四捨五入' },
  floor: { label: '切り捨て',  fn: Math.floor, desc: '小数点以下を切り捨て' },
  ceil:  { label: '切り上げ',  fn: Math.ceil,  desc: '小数点以下を切り上げ' },
};
const calcTax = (incTax, rate = 0.1, method = 'round') => {
  const m = TAX_METHODS[method] || TAX_METHODS.round;
  const exc = m.fn(incTax / (1 + rate));
  const tax = incTax - exc;
  return { exc, tax };
};
const genInvoiceNo = (yearMonth, code, seq = 1) => {
  const ym = yearMonth.replace('-', '');
  return `${ym}-${code}-${String(seq).padStart(2, '0')}`;
};
const lastMonth = (d = TODAY) => {
  const y = d.getFullYear(), m = d.getMonth(); // 0-indexed
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

Object.assign(window, { COMPANY, STORES, HISTORY, DEFAULT_STORES, DEFAULT_HISTORY, persistStores, persistHistory, TODAY, TAX_METHODS, fmtYen, fmtYM_jp, fmtJpDate, fmtJpDateStr, calcTax, genInvoiceNo, lastMonth, recentMonths });
