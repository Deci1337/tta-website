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

export function TermsOfService() {
  const { t, lang } = useLang();

  const metaContent = {
    ru: {
      title: "Правила пользования",
      description: "Правила пользования TikTok Agent. Условия использования приложения и сайта для автоматизации TikTok с AI."
    },
    en: {
      title: "Terms of Service",
      description: "TikTok Agent Terms of Service. Terms and conditions for using our AI-powered TikTok automation app and website."
    }
  };

  const meta = metaContent[lang] || metaContent.en;

  const content = {
    ru: {
      title: "Правила пользования",
      lastUpdated: "Последнее обновление: 24 февраля 2026",
      backToHome: "← Вернуться на главную",
      sections: [
        {
          title: "1. Принятие условий",
          content: `Используя TikTok Agent ("Сервис", "Приложение"), вы соглашаетесь с настоящими Правилами пользования. Если вы не согласны с какими-либо условиями, пожалуйста, не используйте наш Сервис.`
        },
        {
          title: "2. Описание сервиса",
          content: `TikTok Agent — это платформа для автоматизации создания и публикации контента в TikTok с использованием искусственного интеллекта. Сервис включает:`,
          list: [
            "AI-генерацию видеоконтента по заданным параметрам",
            "Автоматическую публикацию контента в TikTok",
            "Аналитику и статистику аккаунта",
            "Планирование и оптимизацию публикаций",
            "Управление несколькими аккаунтами TikTok"
          ]
        },
        {
          title: "3. Регистрация и учетная запись",
          content: `Для использования Сервиса вы должны:`,
          list: [
            "Быть не моложе 16 лет",
            "Предоставить точную и актуальную информацию при регистрации",
            "Поддерживать безопасность вашей учетной записи",
            "Немедленно уведомлять нас о несанкционированном доступе",
            "Нести ответственность за все действия в вашей учетной записи"
          ]
        },
        {
          title: "4. Использование сервиса",
          content: `Вы соглашаетесь использовать Сервис только для законных целей. Запрещается:`,
          list: [
            "Создавать контент, нарушающий законы или права третьих лиц",
            "Генерировать спам, вредоносный или оскорбительный контент",
            "Нарушать правила и условия использования TikTok",
            "Использовать Сервис для мошенничества или обмана",
            "Пытаться получить несанкционированный доступ к системе",
            "Использовать автоматизацию для манипулирования метриками",
            "Создавать контент с нарушением авторских прав",
            "Распространять дезинформацию или вредоносный контент"
          ]
        },
        {
          title: "5. Интеллектуальная собственность",
          content: `Права на контент распределяются следующим образом:`,
          list: [
            "Контент, созданный AI: вы получаете полные права на использование",
            "Код и технология Сервиса: принадлежат TikTok Agent",
            "Товарные знаки: все торговые марки принадлежат их владельцам",
            "Пользовательский контент: вы сохраняете права на свой контент",
            "Лицензия нам: вы предоставляете нам лицензию на хранение и обработку вашего контента для предоставления Сервиса"
          ]
        },
        {
          title: "6. Интеграция с TikTok",
          content: `Использование TikTok API регулируется:`,
          list: [
            "Правилами использования TikTok API",
            "Условиями использования TikTok",
            "Политикой сообщества TikTok",
            "Мы не несем ответственности за изменения в TikTok API или политиках",
            "TikTok может ограничить или заблокировать доступ к API по своему усмотрению"
          ]
        },
        {
          title: "7. Подписка и оплата",
          content: `Условия подписки:`,
          list: [
            "Доступны различные тарифные планы (бесплатный, базовый, премиум)",
            "Оплата производится заранее за выбранный период",
            "Автоматическое продление, если не отменено за 24 часа до окончания",
            "Возврат средств возможен в течение 14 дней (право на отказ ЕС)",
            "Мы оставляем за собой право изменять цены с уведомлением за 30 дней"
          ]
        },
        {
          title: "8. Ограничение ответственности",
          content: `Сервис предоставляется "как есть". Мы не гарантируем:`,
          list: [
            "Бесперебойную работу Сервиса",
            "Отсутствие ошибок или вирусов",
            "Конкретные результаты от использования (просмотры, подписчики)",
            "Соответствие сгенерированного контента вашим ожиданиям",
            "Совместимость с будущими версиями TikTok API"
          ]
        },
        {
          title: "9. Ограничение убытков",
          content: `В максимальной степени, разрешенной законом:`,
          list: [
            "Мы не несем ответственности за косвенные, случайные или штрафные убытки",
            "Наша ответственность ограничена суммой, уплаченной вами за последние 12 месяцев",
            "Мы не несем ответственности за действия TikTok или третьих лиц",
            "Вы используете Сервис на свой риск"
          ]
        },
        {
          title: "10. Прекращение использования",
          content: `Мы можем приостановить или прекратить ваш доступ:`,
          list: [
            "При нарушении настоящих Правил",
            "При подозрении на мошенничество или злоупотребление",
            "По вашему запросу на удаление аккаунта",
            "При длительной неактивности (3+ года)",
            "При технических или юридических причинах"
          ]
        },
        {
          title: "11. Изменения в правилах",
          content: `Мы можем изменять эти Правила. Существенные изменения вступают в силу через 30 дней после уведомления. Продолжение использования Сервиса после изменений означает ваше согласие с новыми условиями.`
        },
        {
          title: "12. Применимое право и юрисдикция",
          content: `Настоящие Правила регулируются законодательством Франции и Европейского Союза. Споры разрешаются в судах по месту нахождения нашей компании, за исключением случаев, когда применимое законодательство о защите прав потребителей предусматривает иное.`
        },
        {
          title: "13. Разрешение споров",
          content: `В случае возникновения спора:`,
          list: [
            "Сначала свяжитесь с нами для попытки урегулирования",
            "Потребители ЕС могут использовать платформу ODR: https://ec.europa.eu/consumers/odr",
            "Доступна медиация перед судебным разбирательством",
            "Применяются права потребителей согласно местному законодательству"
          ]
        },
        {
          title: "14. Контактная информация",
          content: `По вопросам, связанным с настоящими Правилами обращайтесь в Telegram: @unrealveliky или @kaabaharamhalal, GitHub: github.com/Deci1337, github.com/mikhaildvortsov`
        },
        {
          title: "15. Делимость положений",
          content: `Если какое-либо положение настоящих Правил будет признано недействительным, остальные положения остаются в силе.`
        }
      ]
    },
    en: {
      title: "Terms of Service",
      lastUpdated: "Last updated: February 24, 2026",
      backToHome: "← Back to Home",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content: `By using TikTok Agent ("Service", "Application"), you agree to these Terms of Service. If you do not agree with any terms, please do not use our Service.`
        },
        {
          title: "2. Service Description",
          content: `TikTok Agent is a platform for automating content creation and publishing on TikTok using artificial intelligence. The Service includes:`,
          list: [
            "AI-powered video content generation based on specified parameters",
            "Automatic content publishing to TikTok",
            "Account analytics and statistics",
            "Publication scheduling and optimization",
            "Multi-account TikTok management"
          ]
        },
        {
          title: "3. Registration and Account",
          content: `To use the Service, you must:`,
          list: [
            "Be at least 16 years old",
            "Provide accurate and current information during registration",
            "Maintain the security of your account",
            "Immediately notify us of unauthorized access",
            "Be responsible for all actions in your account"
          ]
        },
        {
          title: "4. Service Usage",
          content: `You agree to use the Service only for lawful purposes. Prohibited activities:`,
          list: [
            "Creating content that violates laws or third-party rights",
            "Generating spam, malicious, or offensive content",
            "Violating TikTok's terms and conditions",
            "Using the Service for fraud or deception",
            "Attempting unauthorized access to the system",
            "Using automation to manipulate metrics",
            "Creating content that infringes copyright",
            "Spreading misinformation or harmful content"
          ]
        },
        {
          title: "5. Intellectual Property",
          content: `Content rights are distributed as follows:`,
          list: [
            "AI-generated content: you receive full usage rights",
            "Service code and technology: owned by TikTok Agent",
            "Trademarks: all trademarks belong to their owners",
            "User content: you retain rights to your content",
            "License to us: you grant us a license to store and process your content to provide the Service"
          ]
        },
        {
          title: "6. TikTok Integration",
          content: `Use of TikTok API is governed by:`,
          list: [
            "TikTok API Terms of Use",
            "TikTok Terms of Service",
            "TikTok Community Guidelines",
            "We are not responsible for changes to TikTok API or policies",
            "TikTok may restrict or block API access at its discretion"
          ]
        },
        {
          title: "7. Subscription and Payment",
          content: `Subscription terms:`,
          list: [
            "Various pricing plans available (free, basic, premium)",
            "Payment is made in advance for the selected period",
            "Automatic renewal unless canceled 24 hours before expiration",
            "Refunds available within 14 days (EU right of withdrawal)",
            "We reserve the right to change prices with 30 days notice"
          ]
        },
        {
          title: "8. Disclaimer of Warranties",
          content: `The Service is provided "as is". We do not guarantee:`,
          list: [
            "Uninterrupted Service operation",
            "Absence of errors or viruses",
            "Specific results from usage (views, followers)",
            "Generated content meeting your expectations",
            "Compatibility with future TikTok API versions"
          ]
        },
        {
          title: "9. Limitation of Liability",
          content: `To the maximum extent permitted by law:`,
          list: [
            "We are not liable for indirect, incidental, or punitive damages",
            "Our liability is limited to amounts paid by you in the last 12 months",
            "We are not responsible for actions of TikTok or third parties",
            "You use the Service at your own risk"
          ]
        },
        {
          title: "10. Termination",
          content: `We may suspend or terminate your access:`,
          list: [
            "Upon violation of these Terms",
            "Upon suspicion of fraud or abuse",
            "At your request for account deletion",
            "After prolonged inactivity (3+ years)",
            "For technical or legal reasons"
          ]
        },
        {
          title: "11. Changes to Terms",
          content: `We may modify these Terms. Significant changes take effect 30 days after notification. Continued use of the Service after changes constitutes acceptance of new terms.`
        },
        {
          title: "12. Governing Law and Jurisdiction",
          content: `These Terms are governed by the laws of France and the European Union. Disputes are resolved in courts at our company's location, except where applicable consumer protection law provides otherwise.`
        },
        {
          title: "13. Dispute Resolution",
          content: `In case of dispute:`,
          list: [
            "First contact us to attempt resolution",
            "EU consumers may use the ODR platform: https://ec.europa.eu/consumers/odr",
            "Mediation available before litigation",
            "Consumer rights apply according to local law"
          ]
        },
        {
          title: "14. Contact Information",
          content: `For questions regarding these Terms, contact us on Telegram: @unrealveliky or @kaabaharamhalal, GitHub: github.com/Deci1337, github.com/mikhaildvortsov`
        },
        {
          title: "15. Severability",
          content: `If any provision of these Terms is found to be invalid, the remaining provisions remain in effect.`
        }
      ]
    }
  };

  const currentContent = content[lang] || content.en;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white print:bg-white print:text-black">
      <PageMeta title={meta.title} description={meta.description} />
      <StructuredData 
        type="terms-of-service"
        data={createWebPageSchema(
          meta.title,
          meta.description,
          "https://tiktokagent.com/terms-of-service"
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
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
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
