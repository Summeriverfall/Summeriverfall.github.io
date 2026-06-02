// Page B: Stores

const StoreDrawer = ({ open, mode, initial, allStores, onClose, onSave }) => {
  const [form, setForm] = React.useState({ shortName: '', companyName: '', code: '', defaultItemName: '', remark: '' });
  const [touched, setTouched] = React.useState({});
  const [dirty, setDirty] = React.useState(false);
  const [confirmCancel, setConfirmCancel] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      setForm(initial || { shortName: '', companyName: '', code: '', defaultItemName: '', remark: '' });
      setTouched({}); setDirty(false);
    }
  }, [open, initial]);

  const errors = {};
  if (!form.shortName.trim()) errors.shortName = '请填写店名';
  else if (form.shortName.length > 30) errors.shortName = '店名最多 30 字';
  if (!form.companyName.trim()) errors.companyName = '请填写会社名';
  else if (form.companyName.length > 60) errors.companyName = '会社名最多 60 字';
  if (!form.code.trim()) errors.code = '请填写缩写代码';
  else if (!/^[A-Z0-9]{3,4}$/.test(form.code)) errors.code = '3-4 位大写字母数字';
  else {
    const conflict = allStores.find((s) => s.code === form.code && s.id !== (initial?.id));
    if (conflict) errors.code = `缩写 ${form.code} 已被 ${conflict.shortName} 占用`;
  }
  if (form.defaultItemName && form.defaultItemName.length > 30) errors.defaultItemName = '最多 30 字';
  if (form.remark && form.remark.length > 200) errors.remark = '最多 200 字';

  const hasError = Object.keys(errors).length > 0;
  const set = (k, v) => { setForm((f) => ({ ...f, [k]: v })); setDirty(true); };

  const tryClose = () => {
    if (dirty) setConfirmCancel(true);
    else onClose();
  };

  const field = (label, k, hint, child) => (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 13, fontWeight: 500 }}>
        <span>{label}</span>
        {hint && <span style={{ color: 'var(--text-tertiary)', fontWeight: 400, fontSize: 12 }}>{hint}</span>}
      </div>
      {child}
      {touched[k] && errors[k] && <div style={{ marginTop: 4, fontSize: 12, color: 'var(--error-500)' }}>{errors[k]}</div>}
    </div>
  );

  return (
    <>
      <Drawer
        open={open}
        onClose={tryClose}
        title={mode === 'edit' ? '编辑店铺' : '新增店铺'}
        footer={<>
          <button className="btn btn-secondary" onClick={tryClose}>取消</button>
          <button className="btn btn-primary" disabled={hasError} onClick={() => onSave(form)}>保存</button>
        </>}>
        {field('店名 *', 'shortName', `${form.shortName.length}/30`,
          <input className={`input ${touched.shortName && errors.shortName ? 'error' : ''}`}
            value={form.shortName} onChange={(e) => set('shortName', e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, shortName: true }))} placeholder="例：starry" />
        )}
        {field('会社名（日文）*', 'companyName', `${form.companyName.length}/60`,
          <input className={`input ${touched.companyName && errors.companyName ? 'error' : ''}`}
            style={{ fontFamily: 'var(--font-jp)' }}
            value={form.companyName} onChange={(e) => set('companyName', e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, companyName: true }))}
            placeholder="例：Starry Flow Spa スタリーフロースパ" />
        )}
        {field('缩写代码 *', 'code', '3-4 位大写字母/数字',
          <input className={`input ${touched.code && errors.code ? 'error' : ''}`}
            style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}
            value={form.code} onChange={(e) => set('code', e.target.value.toUpperCase())}
            onBlur={() => setTouched((t) => ({ ...t, code: true }))} placeholder="例：STA" maxLength={4} />
        )}
        {field('默认案件名', 'defaultItemName', `${form.defaultItemName.length}/30`,
          <input className={`input ${touched.defaultItemName && errors.defaultItemName ? 'error' : ''}`}
            style={{ fontFamily: 'var(--font-jp)' }}
            value={form.defaultItemName} onChange={(e) => set('defaultItemName', e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, defaultItemName: true }))}
            placeholder="例：業務委託サービス料" />
        )}
        {field('备注', 'remark', `${form.remark.length}/200`,
          <textarea className={`input ${touched.remark && errors.remark ? 'error' : ''}`}
            rows={3}
            value={form.remark} onChange={(e) => set('remark', e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, remark: true }))} placeholder="选填" />
        )}
      </Drawer>
      <Confirm
        open={confirmCancel}
        title="放弃修改？"
        body="当前编辑尚未保存，确认放弃吗？"
        confirmText="放弃"
        danger
        onCancel={() => setConfirmCancel(false)}
        onConfirm={() => { setConfirmCancel(false); onClose(); }}
      />
    </>
  );
};

const ImportModal = ({ open, onClose, onImport }) => {
  const [step, setStep] = React.useState(0); // 0=upload, 1=preview, 2=done
  const [file, setFile] = React.useState(null);
  React.useEffect(() => { if (open) { setStep(0); setFile(null); } }, [open]);

  const mockPreview = [
    { row: 1, status: 'new', shortName: 'gentle wave', companyName: 'Gentle Wave Spa ジェントルウェーブ', code: 'GEW' },
    { row: 2, status: 'update', shortName: 'starry', companyName: 'Starry Flow Spa スタリーフロースパ', code: 'STA' },
    { row: 3, status: 'new', shortName: 'AOI Relax', companyName: '株式会社AOI', code: 'AOI' },
    { row: 4, status: 'error', shortName: '', companyName: 'XYZ', code: 'XY', error: '缩写须 3-4 位' },
  ];

  return (
    <Modal open={open} onClose={onClose} title="批量导入店铺" width={680}
      footer={
        step === 0 ? <>
          <button className="btn btn-secondary" onClick={onClose}>取消</button>
          <button className="btn btn-primary" disabled={!file} onClick={() => setStep(1)}>下一步</button>
        </> : step === 1 ? <>
          <button className="btn btn-secondary" onClick={() => setStep(0)}>返回</button>
          <button className="btn btn-primary" onClick={() => { onImport(mockPreview.filter((r) => r.status !== 'error')); onClose(); }}>
            确认导入 ({mockPreview.filter((r) => r.status !== 'error').length} 条)
          </button>
        </> : null
      }>
      <div style={{ padding: 24 }}>
        {step === 0 && (
          <>
            <div style={{ marginBottom: 16, fontSize: 13, color: 'var(--text-secondary)' }}>
              1. 下载 Excel 模板填写店铺信息<br/>
              2. 上传填写好的 Excel 文件
            </div>
            <div style={{ marginBottom: 16 }}>
              <button className="btn btn-secondary btn-sm">
                <Icon name="download" size={14} /> 下载模板
              </button>
            </div>
            <label
              style={{
                display: 'block', border: `2px dashed ${file ? 'var(--primary-500)' : 'var(--border-strong)'}`,
                borderRadius: 8, padding: 40, textAlign: 'center', cursor: 'pointer',
                background: file ? 'var(--primary-50)' : '#FAFAFA',
              }}>
              <input type="file" style={{ display: 'none' }} accept=".xlsx,.xls" onChange={(e) => setFile(e.target.files[0])} />
              <Icon name="upload" size={32} color={file ? 'var(--primary-500)' : 'var(--text-tertiary)'} />
              <div style={{ marginTop: 12, fontSize: 14, fontWeight: 500 }}>
                {file ? file.name : '点击或拖拽 Excel 文件到此处'}
              </div>
              <div style={{ marginTop: 4, fontSize: 12, color: 'var(--text-tertiary)' }}>支持 .xlsx / .xls 格式</div>
            </label>
          </>
        )}
        {step === 1 && (
          <>
            <div style={{ marginBottom: 12, display: 'flex', gap: 12, fontSize: 12 }}>
              <span className="tag tag-green">新增 {mockPreview.filter((r) => r.status === 'new').length}</span>
              <span className="tag tag-orange">更新 {mockPreview.filter((r) => r.status === 'update').length}</span>
              <span className="tag tag-red">错误 {mockPreview.filter((r) => r.status === 'error').length}</span>
            </div>
            <div style={{ border: '1px solid var(--border)', borderRadius: 6, overflow: 'hidden' }}>
              <table className="tbl" style={{ fontSize: 12 }}>
                <thead><tr><th style={{ width: 50 }}>行</th><th style={{ width: 80 }}>状态</th><th>店名</th><th>会社名</th><th style={{ width: 70 }}>缩写</th></tr></thead>
                <tbody>
                  {mockPreview.map((r) => (
                    <tr key={r.row} style={r.status === 'error' ? { background: 'var(--error-50)' } : null}>
                      <td className="num">{r.row}</td>
                      <td>
                        {r.status === 'new' && <span className="tag tag-green">新建</span>}
                        {r.status === 'update' && <span className="tag tag-orange">更新</span>}
                        {r.status === 'error' && <span className="tag tag-red">错误</span>}
                      </td>
                      <td>{r.shortName || '—'}</td>
                      <td style={{ fontFamily: 'var(--font-jp)' }}>{r.companyName}</td>
                      <td><span className="num">{r.code}</span>{r.error && <div style={{ fontSize: 11, color: 'var(--error-500)' }}>{r.error}</div>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

const PageStores = ({ stores, setStores }) => {
  const toast = useToast();
  const [search, setSearch] = React.useState('');
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [drawerMode, setDrawerMode] = React.useState('new');
  const [drawerInitial, setDrawerInitial] = React.useState(null);
  const [importOpen, setImportOpen] = React.useState(false);
  const [delTarget, setDelTarget] = React.useState(null);
  const [delConfirmText, setDelConfirmText] = React.useState('');
  const [detailStore, setDetailStore] = React.useState(null);

  const filtered = stores.filter((s) =>
    !search ||
    s.shortName.toLowerCase().includes(search.toLowerCase()) ||
    s.companyName.toLowerCase().includes(search.toLowerCase()) ||
    s.code.toLowerCase().includes(search.toLowerCase())
  );

  const openNew = () => { setDrawerMode('new'); setDrawerInitial(null); setDrawerOpen(true); };
  const openEdit = (s) => { setDrawerMode('edit'); setDrawerInitial(s); setDrawerOpen(true); };

  const save = (form) => {
    if (drawerMode === 'new') {
      const id = 's' + Math.random().toString(36).slice(2, 7);
      setStores((arr) => [...arr, { ...form, id, createdAt: '2026-05-09' }]);
      toast.push(`已添加「${form.shortName}」`, 'success');
    } else {
      setStores((arr) => arr.map((s) => s.id === drawerInitial.id ? { ...s, ...form } : s));
      toast.push(`已更新「${form.shortName}」`, 'success');
    }
    setDrawerOpen(false);
  };

  const doDelete = () => {
    setStores((arr) => arr.filter((s) => s.id !== delTarget.id));
    toast.push(`已删除「${delTarget.shortName}」`, 'success');
    setDelTarget(null); setDelConfirmText('');
  };

  return (
    <div className="fade-in" data-screen-label="02 Stores">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0, marginBottom: 6 }}>店铺管理</h1>
          <div style={{ fontSize: 14, color: 'var(--text-secondary)' }}>维护开票店铺及其会社信息</div>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div style={{ position: 'relative', width: 240 }}>
            <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }}>
              <Icon name="search" size={14} color="var(--text-tertiary)" />
            </span>
            <input className="input" style={{ paddingLeft: 34 }} placeholder="搜索店名/缩写" value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
          <button className="btn btn-secondary" onClick={() => setImportOpen(true)}>
            <Icon name="upload" size={14} /> 批量导入
          </button>
          <button className="btn btn-primary" onClick={openNew}>
            <Icon name="plus" size={14} /> 新增店铺
          </button>
        </div>
      </div>

      <div className="card" style={{ overflow: 'hidden' }}>
        <table className="tbl">
          <thead>
            <tr>
              <th style={{ width: 60 }}>#</th>
              <th style={{ width: 180 }}>店名</th>
              <th style={{ width: 320 }}>会社名</th>
              <th style={{ width: 110 }}>缩写代码</th>
              <th style={{ width: 110, textAlign: 'right' }}>请求书数</th>
              <th style={{ width: 140 }}>创建时间</th>
              <th style={{ width: 220 }}>操作</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s, i) => {
              const count = (typeof HISTORY !== 'undefined' && HISTORY) ? HISTORY.filter((h) => h.storeId === s.id).length : 0;
              return (
              <tr key={s.id} style={{ cursor: 'pointer' }} onClick={() => setDetailStore(s)}>
                <td className="num" style={{ color: 'var(--text-tertiary)' }}>{i + 1}</td>
                <td style={{ fontWeight: 500 }}>
                  <span style={{ color: 'var(--primary-500)' }}>{s.shortName}</span>
                </td>
                <td style={{ fontFamily: 'var(--font-jp)', color: 'var(--text-secondary)' }}>{s.companyName}</td>
                <td><span className="num" style={{ padding: '4px 10px', background: '#F1F5F9', color: 'var(--text-primary)', borderRadius: 4, fontWeight: 600, fontSize: 12 }}>{s.code}</span></td>
                <td className="amt-cell" style={{ fontWeight: 500 }}>
                  {count > 0 ? (
                    <span style={{ color: 'var(--primary-500)' }}>{count} <span style={{ fontSize: 11, color: 'var(--text-tertiary)', fontWeight: 400 }}>份</span></span>
                  ) : (
                    <span style={{ color: 'var(--text-tertiary)' }}>—</span>
                  )}
                </td>
                <td className="num" style={{ color: 'var(--text-secondary)' }}>{s.createdAt}</td>
                <td onClick={(e) => e.stopPropagation()}>
                  <div style={{ display: 'flex', gap: 4 }}>
                    <button className="btn btn-ghost btn-sm" onClick={() => setDetailStore(s)}>
                      <Icon name="folder" size={13} /> 查看请求书
                    </button>
                    <button className="btn btn-ghost btn-sm" onClick={() => openEdit(s)}>
                      <Icon name="edit" size={13} /> 编辑
                    </button>
                    <button className="btn btn-ghost btn-sm" style={{ color: 'var(--error-500)' }} onClick={() => setDelTarget(s)}>
                      <Icon name="trash" size={13} /> 删除
                    </button>
                  </div>
                </td>
              </tr>
              );
            })}
            {filtered.length === 0 && (
              <tr><td colSpan={7}><Empty title="未找到匹配的店铺" body="尝试调整搜索关键词" /></td></tr>
            )}
          </tbody>
        </table>
      </div>

      <StoreDrawer
        open={drawerOpen}
        mode={drawerMode}
        initial={drawerInitial}
        allStores={stores}
        onClose={() => setDrawerOpen(false)}
        onSave={save}
      />
      <StoreDetail
        open={!!detailStore}
        store={detailStore}
        onClose={() => setDetailStore(null)}
      />
      <ImportModal open={importOpen} onClose={() => setImportOpen(false)} onImport={(rows) => { setStores((arr) => [...arr, ...rows.map((r) => ({ shortName: r.shortName, companyName: r.companyName, code: r.code, defaultItemName: '業務委託サービス料', remark: '', id: 's' + Math.random().toString(36).slice(2, 7), createdAt: new Date().toISOString().slice(0, 10) }))]); toast.push(`已导入 ${rows.length} 条`, 'success'); }} />

      {/* Delete with type-to-confirm */}
      <Modal open={!!delTarget} onClose={() => { setDelTarget(null); setDelConfirmText(''); }} title="删除店铺" width={440}
        footer={<>
          <button className="btn btn-secondary" onClick={() => { setDelTarget(null); setDelConfirmText(''); }}>取消</button>
          <button className="btn btn-danger" disabled={delConfirmText !== '删除'} onClick={doDelete}>确认删除</button>
        </>}>
        {delTarget && (
          <div style={{ padding: 24, fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            <div style={{ marginBottom: 14 }}>
              确定删除店铺 <strong style={{ color: 'var(--text-primary)' }}>「{delTarget.shortName}」</strong>？
            </div>
            <div style={{ padding: 12, background: 'var(--warning-50)', border: '1px solid #FCD34D', borderRadius: 6, fontSize: 13, marginBottom: 16 }}>
              <Icon name="alert" size={14} color="var(--warning-500)" style={{ verticalAlign: 'middle', marginRight: 6 }} />
              删除后将无法生成此店铺的新请求书，<strong>历史记录会保留</strong>。
            </div>
            <div style={{ marginBottom: 6, fontSize: 13 }}>请输入「<strong>删除</strong>」确认操作：</div>
            <input className="input" value={delConfirmText} onChange={(e) => setDelConfirmText(e.target.value)} placeholder="输入「删除」" />
          </div>
        )}
      </Modal>
    </div>
  );
};

window.PageStores = PageStores;
