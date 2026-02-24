import { useLang } from "../context/LangContext";
import { Link } from "react-router-dom";
import { LegalNav } from "../components/LegalNav";
import { LangSwitcher } from "../components/LangSwitcher";
import { TableOfContents } from "../components/TableOfContents";
import { ScrollToTop } from "../components/ScrollToTop";
import { PageMeta } from "../components/PageMeta";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { PrintButton } from "../components/PrintButton";
import { StructuredData, createWebPageSchema } from "../components/StructuredData";

export function PrivacyPolicy() {
  const { t, lang } = useLang();

  const metaContent = {
    ru: {
      title: "Политика конфиденциальности",
      description: "Политика конфиденциальности TikTok Agent. Узнайте, как мы собираем, используем и защищаем ваши данные в соответствии с GDPR."
    },
    en: {
      title: "Privacy Policy",
      description: "TikTok Agent Privacy Policy. Learn how we collect, use, and protect your data in compliance with GDPR."
    }
  };

  const meta = metaContent[lang] || metaContent.en;

  const content = {
    ru: {
      title: "Политика конфиденциальности",
      lastUpdated: "Последнее обновление: 24 февраля 2026",
      backToHome: "← Вернуться на главную",
      sections: [
        {
          title: "1. Введение",
          content: `TikTok Agent ("мы", "наш", "нас") уважает вашу конфиденциальность и стремится защитить ваши персональные данные. Эта политика конфиденциальности объясняет, как мы собираем, используем, храним и защищаем вашу информацию при использовании нашего приложения и веб-сайта.`
        },
        {
          title: "2. Собираемые данные",
          content: `Мы собираем следующие категории данных:`,
          list: [
            "Данные учетной записи: имя пользователя, адрес электронной почты, пароль (в зашифрованном виде)",
            "Данные использования: информация о том, как вы используете приложение, созданный контент, настройки",
            "Технические данные: IP-адрес, тип устройства, операционная система, идентификаторы устройства",
            "Данные TikTok: информация о вашем аккаунте TikTok, которую вы предоставляете для автоматизации",
            "Аналитические данные: статистика использования, взаимодействие с функциями приложения"
          ]
        },
        {
          title: "3. Цели обработки данных",
          content: `Мы используем ваши данные для:`,
          list: [
            "Предоставления и улучшения наших услуг по автоматизации TikTok",
            "Генерации контента с помощью искусственного интеллекта",
            "Аналитики и оптимизации работы приложения",
            "Обеспечения безопасности и предотвращения мошенничества",
            "Связи с вами по вопросам поддержки и обновлений",
            "Соблюдения юридических обязательств"
          ]
        },
        {
          title: "4. Правовые основания обработки (GDPR)",
          content: `Мы обрабатываем ваши данные на следующих основаниях:`,
          list: [
            "Согласие: вы дали явное согласие на обработку данных для определенных целей",
            "Исполнение договора: обработка необходима для предоставления наших услуг",
            "Законные интересы: улучшение наших услуг и обеспечение безопасности",
            "Юридические обязательства: соблюдение применимого законодательства"
          ]
        },
        {
          title: "5. Хранение и защита данных",
          content: `Мы применяем следующие меры безопасности:`,
          list: [
            "Шифрование данных при передаче (TLS/SSL) и хранении",
            "Регулярные резервные копии с шифрованием",
            "Контроль доступа и аутентификация",
            "Регулярные аудиты безопасности",
            "Серверы расположены во Франции (ЕС) с соблюдением стандартов GDPR"
          ]
        },
        {
          title: "6. Срок хранения данных",
          content: `Мы храним ваши данные:`,
          list: [
            "Данные учетной записи: до удаления аккаунта или 3 года неактивности",
            "Созданный контент: до удаления пользователем или аккаунта",
            "Аналитические данные: 12 месяцев, затем анонимизация",
            "Журналы безопасности: 6 месяцев",
            "Данные транзакций: 7 лет (налоговое законодательство)"
          ]
        },
        {
          title: "7. Ваши права (GDPR)",
          content: `У вас есть следующие права:`,
          list: [
            "Право на доступ: получить копию ваших данных",
            "Право на исправление: исправить неточные данные",
            "Право на удаление: удалить ваши данные ('право быть забытым')",
            "Право на ограничение обработки: ограничить использование данных",
            "Право на переносимость: получить данные в машиночитаемом формате",
            "Право на возражение: возразить против обработки данных",
            "Право отозвать согласие: в любое время без последствий"
          ]
        },
        {
          title: "8. Передача данных третьим лицам",
          content: `Мы можем передавать данные следующим категориям получателей:`,
          list: [
            "TikTok API: для автоматизации публикаций (в соответствии с политикой TikTok)",
            "Поставщики облачных услуг: для хостинга и хранения данных (AWS/DigitalOcean)",
            "Сервисы AI: для генерации контента (OpenAI, Anthropic)",
            "Аналитические сервисы: для улучшения приложения",
            "Правоохранительные органы: при наличии законного требования"
          ]
        },
        {
          title: "9. Международная передача данных",
          content: `Наши серверы расположены в Европейском Союзе (Франция). При передаче данных за пределы ЕС мы используем стандартные договорные оговорки (SCC) и другие механизмы защиты, одобренные Европейской комиссией.`
        },
        {
          title: "10. Файлы cookie и отслеживание",
          content: `Мы используем следующие типы cookies:`,
          list: [
            "Необходимые: для работы сайта и приложения (не требуют согласия)",
            "Аналитические: для анализа использования (требуют согласия)",
            "Функциональные: для сохранения настроек (требуют согласия)",
            "Маркетинговые: для персонализации (требуют согласия)"
          ]
        },
        {
          title: "11. Права детей",
          content: `Наше приложение предназначено для пользователей старше 16 лет. Мы сознательно не собираем данные детей младше 16 лет. Если вы узнали, что ребенок предоставил нам персональные данные, свяжитесь с нами для удаления этих данных.`
        },
        {
          title: "12. Изменения в политике",
          content: `Мы можем обновлять эту политику конфиденциальности. О существенных изменениях мы уведомим вас по электронной почте или через уведомление в приложении за 30 дней до вступления изменений в силу.`
        },
        {
          title: "13. Контактная информация",
          content: `По вопросам конфиденциальности обращайтесь в Telegram: @unrealveliky или @kaabaharamhalal`
        },
        {
          title: "14. Надзорный орган",
          content: `Вы имеете право подать жалобу в надзорный орган по защите данных в вашей стране. Для пользователей из ЕС это национальный орган по защите данных.`
        }
      ]
    },
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: February 24, 2026",
      backToHome: "← Back to Home",
      sections: [
        {
          title: "1. Introduction",
          content: `TikTok Agent ("we", "our", "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, store, and protect your information when using our application and website.`
        },
        {
          title: "2. Data We Collect",
          content: `We collect the following categories of data:`,
          list: [
            "Account data: username, email address, password (encrypted)",
            "Usage data: information about how you use the app, created content, settings",
            "Technical data: IP address, device type, operating system, device identifiers",
            "TikTok data: information about your TikTok account that you provide for automation",
            "Analytics data: usage statistics, feature interactions"
          ]
        },
        {
          title: "3. Purpose of Data Processing",
          content: `We use your data to:`,
          list: [
            "Provide and improve our TikTok automation services",
            "Generate content using artificial intelligence",
            "Analyze and optimize app performance",
            "Ensure security and prevent fraud",
            "Communicate with you regarding support and updates",
            "Comply with legal obligations"
          ]
        },
        {
          title: "4. Legal Basis for Processing (GDPR)",
          content: `We process your data based on:`,
          list: [
            "Consent: you have given explicit consent for processing data for specific purposes",
            "Contract performance: processing is necessary to provide our services",
            "Legitimate interests: improving our services and ensuring security",
            "Legal obligations: compliance with applicable law"
          ]
        },
        {
          title: "5. Data Storage and Protection",
          content: `We implement the following security measures:`,
          list: [
            "Data encryption in transit (TLS/SSL) and at rest",
            "Regular encrypted backups",
            "Access control and authentication",
            "Regular security audits",
            "Servers located in France (EU) complying with GDPR standards"
          ]
        },
        {
          title: "6. Data Retention Period",
          content: `We retain your data:`,
          list: [
            "Account data: until account deletion or 3 years of inactivity",
            "Created content: until deleted by user or account deletion",
            "Analytics data: 12 months, then anonymized",
            "Security logs: 6 months",
            "Transaction data: 7 years (tax legislation)"
          ]
        },
        {
          title: "7. Your Rights (GDPR)",
          content: `You have the following rights:`,
          list: [
            "Right of access: obtain a copy of your data",
            "Right to rectification: correct inaccurate data",
            "Right to erasure: delete your data ('right to be forgotten')",
            "Right to restriction: limit data processing",
            "Right to data portability: receive data in machine-readable format",
            "Right to object: object to data processing",
            "Right to withdraw consent: at any time without consequences"
          ]
        },
        {
          title: "8. Third-Party Data Sharing",
          content: `We may share data with the following categories of recipients:`,
          list: [
            "TikTok API: for publication automation (in accordance with TikTok policy)",
            "Cloud service providers: for hosting and data storage (AWS/DigitalOcean)",
            "AI services: for content generation (OpenAI, Anthropic)",
            "Analytics services: for app improvement",
            "Law enforcement: when legally required"
          ]
        },
        {
          title: "9. International Data Transfers",
          content: `Our servers are located in the European Union (France). When transferring data outside the EU, we use Standard Contractual Clauses (SCCs) and other protection mechanisms approved by the European Commission.`
        },
        {
          title: "10. Cookies and Tracking",
          content: `We use the following types of cookies:`,
          list: [
            "Necessary: for website and app functionality (no consent required)",
            "Analytics: for usage analysis (consent required)",
            "Functional: for saving preferences (consent required)",
            "Marketing: for personalization (consent required)"
          ]
        },
        {
          title: "11. Children's Rights",
          content: `Our application is intended for users aged 16 and older. We do not knowingly collect data from children under 16. If you learn that a child has provided us with personal data, please contact us to delete this data.`
        },
        {
          title: "12. Policy Changes",
          content: `We may update this privacy policy. We will notify you of significant changes via email or app notification 30 days before the changes take effect.`
        },
        {
          title: "13. Contact Information",
          content: `For privacy inquiries, contact us on Telegram: @unrealveliky or @kaabaharamhalal`
        },
        {
          title: "14. Supervisory Authority",
          content: `You have the right to lodge a complaint with a data protection supervisory authority in your country. For EU users, this is your national data protection authority.`
        }
      ]
    }
  };

  const currentContent = content[lang] || content.en;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white print:bg-white print:text-black">
      <PageMeta title={meta.title} description={meta.description} />
      <StructuredData 
        type="privacy-policy"
        data={createWebPageSchema(
          meta.title,
          meta.description,
          "https://tiktokagent.com/privacy-policy"
        )}
      />
      <LangSwitcher />
      
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumbs />

        <LegalNav />

        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="flex items-start justify-between mb-8">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  {currentContent.title}
                </h1>
                
                <div className="flex items-center gap-4 flex-wrap">
                  <p className="text-white/60 text-sm">
                    {currentContent.lastUpdated}
                  </p>
                  <PrintButton />
                </div>
              </div>
              
              <div className="hidden md:block">
                <svg className="w-16 h-16 text-purple-400/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
            </div>

            <div className="space-y-8">
              {currentContent.sections.map((section, index) => (
                <section 
                  key={index} 
                  id={`section-${index}`} 
                  className="scroll-mt-24"
                >
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm font-bold">
                      {index + 1}
                    </span>
                    {section.title.replace(/^\d+\.\s*/, '')}
                  </h2>
                  <p className="text-white/80 leading-relaxed mb-4">
                    {section.content}
                  </p>
                  {section.list && (
                    <ul className="space-y-3 ml-6">
                      {section.list.map((item, idx) => (
                        <li key={idx} className="text-white/70 leading-relaxed flex items-start gap-3">
                          <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-white/70 leading-relaxed">
                    <strong className="text-white">{lang === 'ru' ? 'Отказ от ответственности:' : 'Disclaimer:'}</strong> {lang === 'ru' 
                      ? 'Этот документ предоставлен в информационных целях. Для получения юридической консультации, специфичной для вашей ситуации, обратитесь к квалифицированному юристу.'
                      : 'This document is provided for informational purposes. For legal advice specific to your situation, consult with a qualified attorney.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:block">
            <TableOfContents sections={currentContent.sections} lang={lang} />
          </div>
        </div>
      </div>

      <ScrollToTop />
    </div>
  );
}
