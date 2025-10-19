import React, { useEffect, useState } from "react";
import "./ajustes.css";

import { traducciones } from "../../services/traducciones";

import LogoEmpren from "../../assets/Logo_Empren.png";


export default function Ajustes() {
  const [idioma, setIdioma] = useState("es");
  const [menuOpen, setMenuOpen] = useState(false); // 👉 Estado para abrir/cerrar menú

  useEffect(() => {
    const idiomaGuardado = localStorage.getItem("idiomaSeleccionado") || "es";
    setIdioma(idiomaGuardado);
  }, []);

  useEffect(() => {
    localStorage.setItem("idiomaSeleccionado", idioma);
  }, [idioma]);

  const t = (key) => traducciones[idioma][key];

  return (
    <div>
      {/* Barra superior */}
      <header className="barra-superior">
        {/*
          ✅ REINSERCIÓN DEL BOTÓN HAMBURGUESA:
          Este es el elemento que faltaba. Ahora, al hacer clic,
          cambia el estado 'menuOpen' y activa el menú y la animación.
        */}
        <div className="Lineas" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`top_line common ${menuOpen ? "rotate-down" : ""}`}></span>
          <span className={`middle_line common ${menuOpen ? "hidden" : ""}`}></span>
          <span className={`bottom_line common ${menuOpen ? "rotate-up" : ""}`}></span>
        </div>

        <img src={LogoEmpren} alt="Logo" className="logoem" />
      </header>

      {/* Menú lateral: Usa el estado 'menuOpen' para aplicar la clase 'open' */}
      <div className={`Menu ${menuOpen ? "open" : ""}`}>
        <h1 className="menu_titulo">Menú</h1>
        <ul>
          <li><a href="http://localhost:5173/usuarios"><i className="fas fa-user"></i>Usuarios</a></li>
            <li><a href="http://localhost:5173/registroinventario"><i className="fas fa-clipboard-list"></i>Inventario</a></li>
            <li><a href="#"><i className="fas fa-cart-plus"></i>Registro De Ventas</a></li>
            <li><a href="http://localhost:5173/reporteventas"><i className="fas fa-chart-line"></i>Reporte De Ventas</a></li>
            <li><a href="http://localhost:5173/registrogastos"><i className="fas fa-wallet"></i>Registro De Gastos</a></li>
            <li><a href="http://localhost:5173/reportegastos"><i className="fas fa-file-invoice-dollar"></i>Reporte De Gastos</a></li>
            <li><a href="http://localhost:5173/menureporte"><i className="fas fa-dollar-sign"></i>Reporte De Ganancias</a></li>
            <li><a href="http://localhost:5173/ajustes"><i className="fas fa-cogs"></i>Ajustes</a></li>
        </ul>
      </div>


      <div>
        <h1 className="Titulo">{t("ajustes")}</h1>
        <hr />
      </div>

      <div className="Container">
        <a href="/perfil" className="btn-editar">{t("editarPerfil")}</a>
      </div>

      {/* Notificaciones */}
      <div className="notificaciones">
        <span>
          <img src="https://img.icons8.com/ios-filled/30/000000/appointment-reminders.png" alt="notif"/>
          <span>{t("notificaciones")}</span>
        </span>
        <label className="switch">
          <input type="checkbox" defaultChecked />
          <span className="slider"></span>
        </label>
      </div>

      {/* Idioma */}
      <div className="opcion">
        <span>
          <img src="https://img.icons8.com/ios-filled/50/000000/language.png" alt="idioma"/>
          <span>{t("idioma")}</span>
        </span>
        <select value={idioma} onChange={(e) => setIdioma(e.target.value)}>
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </div>

      {/* Administración de datos */}
      <div className="Datos">
        <span>
          <img src="https://img.icons8.com/ios-filled/30/000000/combo-chart.png" alt="datos"/>
          <span>{t("datos")}</span>
        </span>
        <label className="switch">
          <input type="checkbox" defaultChecked />
          <span className="slider"></span>
        </label>
      </div>

      {/* Actualizaciones */}
      <div className="actualizaciones">
        <span>
          <img src="https://img.icons8.com/ios-filled/30/000000/update-left-rotation.png" alt="update"/>
          <span>{t("actualizaciones")}</span>
        </span>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>

      {/* Cerrar sesión */}
      <button
        className="btn btn-cerrar"
        onClick={() => {
          if (window.confirm("¿Seguro que quieres cerrar sesión?")) {
            alert("Sesión cerrada ✅");
          }
        }}
      >
        {t("cerrarSesion")}
      </button>
    </div>
  );
}