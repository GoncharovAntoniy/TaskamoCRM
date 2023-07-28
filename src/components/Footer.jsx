import s from './Footer.module.scss'

import tg from '../image/telegram.svg'
import viber from '../image/viber.svg'
import wp from '../image/whatsapp.svg'

const Footer = () => {
  return (
    <div className={s.footer}>
        <div className={s.footer_left}>
            <div className={s.footer_left_about}>
                <p className={s.footer_left_about_title}>О компании</p>
                <p className={s.footer_left_about_item}>Партнерская программа</p>
                <p className={s.footer_left_about_item}>Вакансии</p>
            </div>
            <div className={s.footer_left_menu}>
                <div className={s.footer_left_menu_child}>
                    <p className={s.footer_left_menu_child_title}>Меню</p>
                    <p className={s.footer_left_menu_child_item}>Расчет стоимости</p>
                    <p className={s.footer_left_menu_child_item}>Услуги</p>
                    <p className={s.footer_left_menu_child_item}>ВИджеты</p>
                    <p className={s.footer_left_menu_child_item}>Интеграции</p>
                    <p className={s.footer_left_menu_child_item}>Наши клиенты</p>
                </div>
                <div className={s.footer_left_menu_child}>
                    <p className={s.footer_left_menu_child_title}><br /></p>
                    <p className={s.footer_left_menu_child_item}>Кейсы</p>
                    <p className={s.footer_left_menu_child_item}>Благодарственные письма</p>
                    <p className={s.footer_left_menu_child_item}>Сертификаты</p>
                    <p className={s.footer_left_menu_child_item}>Блог на Youtube</p>
                    <p className={s.footer_left_menu_child_item}>Вопрос / Ответ</p>
                </div>
            </div>
        </div>
        <div className={s.footer_right}>
            <p className={s.footer_right_title}>Контакты</p>
            <p className={s.footer_right_item}>+7 555 555-55-55</p>
            <div className={s.footer_right_item}>
                <img src={tg} alt="icon" />
                <img src={viber} alt="icon" />
                <img src={wp} alt="icon" />
            </div>
            <p className={s.footer_right_item}>Москва, Путевой проезд 3с1, к 902</p>
            <p className={s.footer_right_info}>©WELBEX 2022. Все права защищены. <br /><span>Политика конфиденциальности</span></p>
        </div>
    </div>
  )
}
 
export default Footer