* { box-sizing: border-box; }
body {
margin: 0;
font-family: 'Public Sans', sans-serif;
background: #F6F1E4;
color: #2B2620;
}
button { cursor: pointer; font-family: inherit; }
input, select, textarea { font-family: inherit; font-size: 14px; }
.hidden { display: none !important; }
:focus-visible { outline: 2px solid #7A3319; outline-offset: 2px; }

/* ===== Header ===== */
.site-header {
background: #2B2620;
color: #F6F1E4;
padding: 16px 24px;
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
gap: 10px;
position: sticky;
top: 0;
z-index: 30;
}
.brand { display: flex; align-items: center; gap: 10px; }
.brand-name { font-family: 'Fraunces', serif; font-size: 19px; font-weight: 600; }
.brand-sub { font-size: 10.5px; opacity: 0.65; letter-spacing: 0.5px; }
.tabs { display: flex; gap: 6px; }
.tab-btn {
background: transparent;
color: #F6F1E4;
border: 1px solid rgba(246,241,228,0.3);
border-radius: 20px;
padding: 7px 13px;
font-size: 12.5px;
font-weight: 500;
}
.tab-btn.active { background: #F6F1E4; color: #2B2620; }

main { max-width: 1080px; margin: 0 auto; padding: 0 20px 20px; }

/* ===== Hero ===== */
.hero {
background: #2B2620;
color: #F6F1E4;
border-radius: 0 0 22px 22px;
margin: 0 -20px;
padding: 40px 20px 80px;
position: relative;
overflow: hidden;
}
@media (min-width: 640px) {
.hero { padding: 56px 40px 90px; border-radius: 0 0 28px 28px; }
}
.hero-motif { position: absolute; inset: 0; width: 100%; height: 100%; }
.hero-content { position: relative; max-width: 560px; }
.hero-kicker { font-size: 13px; color: #E3A85C; font-weight: 600; margin: 0 0 10px; }
.hero-title {
font-family: 'Fraunces', serif;
font-weight: 700;
font-size: 34px;
line-height: 1.14;
margin: 0 0 14px;
}
@media (min-width: 640px) { .hero-title { font-size: 44px; } }
.hero-sub { font-size: 14.5px; line-height: 1.6; color: #E7DFCB; max-width: 460px; margin: 0 0 24px; }
.hero-actions { display: flex; gap: 10px; flex-wrap: wrap; }
.btn-hero-primary { background: #C68B2C; color: #2B2620; border: none; border-radius: 9px; padding: 12px 20px; font-weight: 700; font-size: 14px; }
.btn-hero-secondary { background: transparent; color: #F6F1E4; border: 1px solid rgba(246,241,228,0.45); border-radius: 9px; padding: 12px 20px; font-weight: 600; font-size: 14px; }

/* Floating search card */
.search-card {
position: relative;
z-index: 2;
margin: 26px -4px -110px;
background: #FFFDF7;
border-radius: 14px;
padding: 16px;
box-shadow: 0 14px 30px rgba(20,16,10,0.28);
display: grid;
grid-template-columns: 1fr;
gap: 10px;
}
@media (min-width: 640px) {
.search-card { grid-template-columns: 1fr 1fr 1fr auto; align-items: end; margin: 26px 0 -56px; }
}
.search-card-field label { display: block; font-size: 11px; color: #8A8578; margin-bottom: 4px; }
.search-card-field select, .search-card-field input { width: 100%; padding: 10px; border-radius: 8px; border: 1px solid #D8CFB8; background: #FFFDF7; }
.search-card-btn { background: #7A3319; color: #F6F1E4; border: none; border-radius: 8px; padding: 12px 20px; font-weight: 700; font-size: 14px; }

/* ===== Stats strip ===== */
.stats-strip {
margin-top: 122px;
background: #F2DFD3;
border: 1px solid #E4C9AE;
border-radius: 14px;
padding: 16px;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
gap: 10px;
text-align: center;
}
@media (min-width: 640px) { .stats-strip { margin-top: 72px; } }
.stat-num { font-family: 'IBM Plex Mono', monospace; font-size: 20px; font-weight: 500; color: #7A3319; }
.stat-label { font-size: 11.5px; color: #6B5A4A; margin-top: 2px; }

/* ===== Area chips ===== */
.area-chip-row { display: flex; gap: 8px; flex-wrap: wrap; margin: 18px 0 4px; }
.chip {
background: #FFFDF7;
border: 1px solid #D8CFB8;
color: #2B2620;
border-radius: 20px;
padding: 6px 12px;
font-size: 12.5px;
font-weight: 500;
}
.chip.active { background: #7A3319; color: #F6F1E4; border-color: #7A3319; }

.listings-anchor { position: relative; top: -70px; }

/* ===== Search / filters ===== */
.search-row { display: flex; gap: 10px; margin: 18px 0 12px; flex-wrap: wrap; }
.search-input-wrap { flex: 1 1 220px; position: relative; display: flex; align-items: center; }
.search-icon { position: absolute; left: 12px; font-size: 14px; opacity: 0.5; }
.search-row input { width: 100%; padding: 11px 12px 11px 36px; border-radius: 10px; border: 1px solid #D8CFB8; background: #FFFDF7; }
.search-row button { padding: 10px 14px; border-radius: 10px; border: 1px solid #D8CFB8; background: #FFFDF7; font-size: 14px; }
.filters-panel {
background: #FFFDF7; border: 1px solid #D8CFB8; border-radius: 12px; padding: 16px; margin-bottom: 12px;
display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px;
}
.filter-field label { display: block; font-size: 11px; color: #8A8578; margin-bottom: 4px; }
.filter-field select, .filter-field input { width: 100%; padding: 8px; border-radius: 8px; border: 1px solid #D8CFB8; }

.results-row { margin-bottom: 10px; }
.results-count { font-size: 12px; color: #8A8578; }

.section-title { font-family: 'Fraunces', serif; font-size: 20px; margin: 0 0 12px; }

/* ===== Grid + cards ===== */
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); gap: 14px; }
.card { background: #FFFDF7; border: 1px solid #D8CFB8; border-radius: 12px; overflow: hidden; cursor: pointer; transition: transform 0.12s ease, box-shadow 0.12s ease; }
.card:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(43,38,32,0.12); }
.card.featured { border: 2px solid #C68B2C; }
.card-image { height: 130px; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; }
.card-image img { width: 100%; height: 100%; object-fit: cover; display: block; }
.card-image .placeholder-icon { font-size: 22px; opacity: 0.5; }
.card-badge { position: absolute; left: 8px; font-size: 10px; padding: 3px 8px; border-radius: 10px; font-weight: 600; }
.badge-featured { top: 8px; background: #C68B2C; color: #4A2F06; }
.badge-verified { background: #2B2620; color: #F6F1E4; display: flex; align-items: center; gap: 3px; }
.badge-type { position: absolute; bottom: 8px; left: 8px; background: #2B2620; color: #F6F1E4; font-size: 10px; padding: 3px 8px; border-radius: 10px; }
.badge-photocount { position: absolute; bottom: 8px; right: 8px; background: rgba(43,38,32,0.75); color: #F6F1E4; font-size: 10px; padding: 3px 8px; border-radius: 10px; }
.fav-btn { position: absolute; top: 8px; right: 8px; background: rgba(255,253,247,0.85); border: none; border-radius: 50%; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; font-size: 14px; }
.card-body { padding: 12px; }
.card-title { font-size: 14px; font-weight: 600; margin-bottom: 3px; line-height: 1.3; }
.card-location { font-size: 12px; color: #8A8578; margin-bottom: 6px; }
.card-price { font-size: 15px; font-weight: 600; color: #7A3319; font-family: 'IBM Plex Mono', monospace; }
.empty-msg { text-align: center; padding: 40px; color: #8A8578; grid-column: 1 / -1; }

/* ===== Feature row ===== */
.feature-row {
margin-top: 34px;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
gap: 14px;
}
.feature-item { background: #FFFDF7; border: 1px solid #D8CFB8; border-radius: 12px; padding: 16px; }
.feature-icon { font-size: 20px; margin-bottom: 8px; }
.feature-title { font-weight: 600; font-size: 14px; margin-bottom: 4px; }
.feature-desc { font-size: 12.5px; color: #6B5A4A; line-height: 1.5; }

/* ===== About strip ===== */
.about-strip {
margin-top: 34px;
background: #F2DFD3;
border-radius: 16px;
padding: 28px 24px;
display: flex;
align-items: center;
gap: 24px;
flex-wrap: wrap;
}
.about-motif { width: 90px; height: 90px; flex-shrink: 0; }
.about-text { flex: 1 1 300px; }
.about-kicker { font-size: 12.5px; color: #7A3319; font-weight: 600; margin: 0 0 6px; }
.about-title { font-family: 'Fraunces', serif; font-size: 22px; line-height: 1.25; margin: 0 0 10px; max-width: 480px; }
.about-body { font-size: 13.5px; color: #4A453C; line-height: 1.6; max-width: 480px; margin: 0; }

/* ===== Forms ===== */
.form { display: flex; flex-direction: column; gap: 10px; max-width: 480px; margin: 20px auto 0; }
.form input, .form select, .form textarea { padding: 10px; border-radius: 8px; border: 1px solid #D8CFB8; width: 100%; }
.form textarea { resize: vertical; }
.row { display: flex; gap: 10px; }
.row > * { flex: 1; }
.hint { font-size: 12px; color: #8A8578; margin: 0; }
.hint-inline { font-size: 11px; color: #8A8578; font-weight: 400; }
.posting-as { font-size: 13px; color: #8A8578; margin-top: -6px; }
.centered-msg { text-align: center; padding: 40px; color: #8A8578; }

/* Photo upload */
.photo-upload-field { border: 1px dashed #C9BE9E; border-radius: 10px; padding: 12px; background: #FFFDF7; }
.photo-upload-label { display: block; font-size: 13px; font-weight: 600; margin-bottom: 8px; cursor: pointer; }
.photo-upload-field input[type="file"] { padding: 0; border: none; font-size: 12px; }
.photo-preview-grid { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px; }
.photo-thumb { position: relative; width: 64px; height: 64px; border-radius: 8px; overflow: hidden; border: 1px solid #D8CFB8; }
.photo-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
.photo-thumb .remove-thumb { position: absolute; top: 2px; right: 2px; background: rgba(43,38,32,0.75); color: #F6F1E4; border: none; border-radius: 50%; width: 18px; height: 18px; font-size: 11px; line-height: 1; display: flex; align-items: center; justify-content: center; }

.feature-box { background: #FFFDF7; border: 1px solid #D8CFB8; border-radius: 10px; padding: 12px; }
.feature-box p { font-size: 13px; color: #4A453C; margin: 0 0 8px; }
.checkbox-row { display: flex; align-items: center; gap: 8px; font-size: 14px; cursor: pointer; }
.ecocash-box { margin-top: 10px; padding-top: 10px; border-top: 1px solid #D8CFB8; }
.ecocash-box input { margin-bottom: 8px; }
.btn-gold { width: 100%; padding: 10px; border-radius: 8px; border: 1px solid #C68B2C; background: #FFFDF7; color: #6B4A16; font-weight: 600; font-size: 13px; }
.btn-gold:disabled { background: #F3E1BB; }
.paid-msg { color: #3B6D11; font-size: 13px; }

.error-msg { color: #A32D2D; font-size: 13px; margin: 0; }
.success-msg { color: #3B6D11; font-size: 13px; margin: 0; }
.btn-primary { padding: 12px; border-radius: 8px; border: none; background: #7A3319; color: #F6F1E4; font-weight: 600; font-size: 14px; }
.btn-outline { padding: 10px 16px; border-radius: 8px; border: 1px solid #D8CFB8; background: transparent; }

/* ===== Account ===== */
.account-card { max-width: 380px; margin: 20px auto 0; background: #FFFDF7; border: 1px solid #D8CFB8; border-radius: 12px; padding: 20px; text-align: center; }
.avatar { width: 52px; height: 52px; border-radius: 50%; background: #F2DFD3; color: #7A3319; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 18px; margin: 0 auto 12px; }
.account-name { font-weight: 600; font-size: 16px; }
.account-phone { font-size: 13px; color: #8A8578; margin-bottom: 16px; }
.account-stats { font-size: 13px; color: #8A8578; margin-bottom: 16px; }

/* ===== Modal ===== */
.modal-backdrop { position: fixed; inset: 0; background: rgba(43,38,32,0.5); display: flex; align-items: flex-end; justify-content: center; z-index: 50; }
.modal-card { background: #F6F1E4; border-radius: 16px 16px 0 0; max-width: 480px; width: 100%; max-height: 88vh; overflow-y: auto; }
.modal-image { height: 200px; position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden; }
.modal-image img { width: 100%; height: 100%; object-fit: cover; display: block; }
.modal-close { position: absolute; top: 12px; right: 12px; background: rgba(255,253,247,0.9); border: none; border-radius: 50%; width: 30px; height: 30px; z-index: 2; }
.modal-thumb-strip { display: flex; gap: 6px; padding: 10px 20px 0; overflow-x: auto; }
.modal-thumb-strip img { width: 56px; height: 56px; object-fit: cover; border-radius: 6px; flex-shrink: 0; cursor: pointer; border: 2px solid transparent; }
.modal-thumb-strip img.active-thumb { border-color: #7A3319; }
.modal-body { padding: 20px; }
.modal-kicker { font-size: 11px; color: #8A8578; margin-bottom: 4px; }
.modal-title { font-family: 'Fraunces', serif; font-size: 22px; margin: 0 0 6px; }
.modal-location { font-size: 13px; color: #8A8578; margin-bottom: 10px; }
.modal-price { font-size: 22px; font-weight: 600; color: #7A3319; margin-bottom: 14px; font-family: 'IBM Plex Mono', monospace; }
.modal-facts { display: flex; gap: 16px; font-size: 13px; color: #4A453C; margin-bottom: 14px; flex-wrap: wrap; }
.modal-desc { font-size: 14px; line-height: 1.6; margin-bottom: 18px; }
.modal-footer { border-top: 1px solid #D8CFB8; padding-top: 14px; display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap; }
.modal-agent-label { font-size: 13px; color: #8A8578; }
.modal-agent-name { font-weight: 600; }
.modal-actions { display: flex; gap: 8px; align-items: center; }
.modal-fav-btn { width: 40px; height: 40px; border-radius: 50%; border: 1px solid #D8CFB8; background: #FFFDF7; font-size: 16px; }
.modal-call-btn { padding: 10px 16px; border-radius: 8px; background: #7A3319; color: #F6F1E4; font-size: 14px; font-weight: 600; text-decoration: none; }

.tone-coral { background: #F2DFD3; }
.tone-green { background: #DCE4CC; }
.tone-amber { background: #F3E1BB; }

/* ===== Footer ===== */
.site-footer { background: #2B2620; color: #E7DFCB; margin-top: 40px; padding: 36px 24px 18px; }
.footer-top { max-width: 1080px; margin: 0 auto; display: grid; grid-template-columns: 1fr; gap: 24px; }
@media (min-width: 640px) { .footer-top { grid-template-columns: 2fr 1fr 1fr; } }
.footer-brand-name { font-family: 'Fraunces', serif; font-size: 17px; color: #F6F1E4; margin-bottom: 8px; }
.footer-brand-desc { font-size: 12.5px; line-height: 1.6; color: #B9AF9A; max-width: 320px; margin: 0; }
.footer-col-title { font-size: 12px; color: #F6F1E4; font-weight: 600; margin-bottom: 10px; }
.footer-link { display: block; background: none; border: none; color: #B9AF9A; font-size: 13px; padding: 0; margin-bottom: 8px; text-align: left; }
.footer-link:hover { color: #F6F1E4; }
.footer-static { font-size: 13px; color: #B9AF9A; line-height: 1.8; }
.footer-bottom { max-width: 1080px; margin: 26px auto 0; padding-top: 16px; border-top: 1px solid rgba(246,241,228,0.12); font-size: 12px; color: #8A8578; }

