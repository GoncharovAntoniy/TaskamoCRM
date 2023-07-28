import s from "./Header.module.scss";

import logo from "../image/logo_welbex.png";
import tg from "../image/telegram.svg";
import viber from "../image/viber.svg";
import wp from "../image/whatsapp.svg";

const Header = () => {
  return (
    <nav className={s.header}>
      <div className={s.header_navbar}>
        <div className={s.header_navbar_logo}>
          <img className={s.header_navbar_logo_img} src={logo} alt="icon" />
          <p className={s.header_navbar_logo_subtitle}>
            крупный интегратор CRM в Росcии и ещё 8 странах
          </p>
        </div>
        <ul className={s.header_navbar_list}>
          <li className={s.header_navbar_list_item}>Услуги</li>
          <li className={s.header_navbar_list_item}>Виджеты</li>
          <li className={s.header_navbar_list_item}>Интеграция</li>
          <li className={s.header_navbar_list_item}>Кейсы</li>
          <li className={`${s.header_navbar_list_item} ${s.sertificate}` }>Сертификаты</li>
        </ul>
      </div>
      <div className={s.header_contacts}>
        <p className={s.header_contacts_item}>+7 555 555-55-55</p>
        <div className={s.header_contacts_item}>
          <img className={s.header_contacts_item_elem} src={tg} alt="icon" />
          <img className={s.header_contacts_item_elem} src={viber} alt="icon" />
          <img className={s.header_contacts_item_elem} src={wp} alt="icon" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
