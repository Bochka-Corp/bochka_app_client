import React from 'react';
import Header from '../Header/Header.jsx';
import AdminPopup from '../AdminPopup/AdminPopup.jsx';

function AdminPanel() {
  return (
    <section className="admin-panel">
      <Header />
      <div className="admin-panel__container">
        <div className="admin-panel__nav">
          <button type="button" className="admin-panel__button">
            +
          </button>
        </div>
      </div>
      <AdminPopup />
    </section>
  );
}

export default AdminPanel;
