import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  ko: {
    translation: {
      nav_home: "서비스 소개",
      nav_privacy: "개인정보처리방침",
      hero_title_part1: "당신의 안전을 위한",
      hero_title_part2: "LocaSOS",
      hero_subtitle: "위급상황 발생 시 단 한 번의 터치로 실시간 위치 공유와 위급상황 전파를 동시에 해결하세요.",
      btn_start: "서비스 시작하기",
      btn_more: "더 알아보기",
      feature_title: "핵심 기능",
      f1_title: "실시간 위치공유",
      f1_desc: "위급 시 내 현재 위치를 보호자에게 실시간으로 전송하여 안전을 확보합니다.",
      f2_title: "이동경로 기록",
      f2_desc: "사용자의 이동 경로를 자동으로 기록하여 예기치 못한 상황에 대비합니다.",
      f3_title: "세이프타이머",
      f3_desc: "설정한 시간 내에 응답이 없을 경우 자동으로 위험 상황을 알립니다.",
      f4_title: "긴급전화 연결",
      f4_desc: "원터치로 주요 구급 기관 및 지정 보호자에게 즉시 전화를 연결합니다.",
      footer_copy: "© 2026 LocaSOS. 모든 권리 보유.",
      privacy_title: "LocaSOS 개인정보 처리방침",
      privacy_effective_date: "시행일: 2026.05.03",
      privacy_intro: "LocaSOS는 실시간 위치 공유와 세이프티 타이머 기능 제공에 필요한 정보만 처리하며, 광고 추적 목적으로 개인정보를 사용하지 않습니다.",
      privacy_s1_title: "1. 수집하는 정보",
      privacy_s1_desc: "회원가입 및 로그인 과정에서 Firebase 사용자 식별자, 이메일 주소, 표시 이름, 로그인 제공자 정보(Apple, Google 또는 LocaSOS), 앱 내 공유 ID를 처리합니다. LocaSOS 직접 계정 가입 시 로그인 ID, 닉네임, 비밀번호 재설정용 복구 이메일을 저장합니다.\n\n연결 기능 이용 시 연결된 사용자의 식별자, 표시 이름, 이메일 주소, 공유 ID, 연결 시각을 저장합니다.\n\n푸시 알림 제공을 위해 FCM 디바이스 토큰을 저장할 수 있습니다.",
      privacy_s2_title: "2. 위치정보 처리",
      privacy_s2_desc: "앱은 사용자가 위치 공유, 세이프티 타이머, 현재 위치 확인 등 위치 기반 기능을 사용할 때 기기의 위치 권한을 요청합니다.\n\n실시간 공유 중에는 위도, 경도, 위치 정확도, 위치 기록 시각, 마지막 주소 정보를 저장할 수 있습니다. 세이프티 타이머 실행 중에는 자동 공유 판단을 위해 최신 위치 1개를 주기적으로 갱신할 수 있습니다.\n\n위치 권한은 iOS 설정에서 언제든지 변경할 수 있으며, 공유 종료 또는 타이머 취소 시 앱의 위치 업데이트도 중지됩니다.",
      privacy_s3_title: "3. 알림",
      privacy_s3_desc: "앱은 위치 공유 시작, 세이프티 타이머 확인 요청, 자동 공유 시작 등 중요한 상태를 알려주기 위해 알림 권한을 요청합니다.\n\n알림 발송을 위해 FCM 토큰을 Firebase에 저장할 수 있으며, 사용자는 iOS 설정에서 알림 권한을 언제든지 변경할 수 있습니다.",
      privacy_s4_title: "4. 정보 공유",
      privacy_s4_desc: "LocaSOS는 사용자가 직접 연결한 사용자에게만 실시간 위치 공유 세션 정보를 제공합니다.\n\n공유되는 정보에는 공유자 이름 또는 공유 ID, 공유 시작/종료 시각, 마지막 위치, 위치 정확도, 이동 경로 기록이 포함될 수 있습니다.\n\n법령상 의무가 있는 경우를 제외하고 광고 사업자나 데이터 브로커에게 개인정보를 판매하거나 제공하지 않습니다.",
      privacy_s5_title: "5. 구독 및 결제",
      privacy_s5_desc: "프리미엄 구독은 Apple StoreKit을 통해 처리됩니다. 결제 카드 번호 등 결제 수단 정보는 앱 개발자가 직접 수집하거나 저장하지 않습니다.\n\n앱은 프리미엄 기능 제공을 위해 StoreKit에서 검증된 구독 상태, 상품 ID, 구독 만료일 등 권한 정보를 확인할 수 있습니다.",
      privacy_s6_title: "6. 이용하는 외부 서비스",
      privacy_s6_desc: "앱은 서비스 제공을 위해 Firebase Authentication, Cloud Firestore, Firebase Cloud Messaging, Google Sign-In, Apple Sign In, StoreKit, Core Location, MapKit, CLGeocoder를 사용합니다.\n\nFirebase 등 일부 외부 서비스는 국외 서버에서 데이터를 저장하거나 처리할 수 있습니다. 외부 서비스 제공자는 각자의 보안 및 개인정보 보호 기준에 따라 데이터를 처리합니다.",
      privacy_s7_title: "7. 보관 기간",
      privacy_s7_desc: "회원 정보와 연결 정보는 계정 유지 기간 동안 보관됩니다.\n\n위치 공유 기록, 이동 경로 기록, 세이프티 타이머 기록은 기능 제공, 기록 확인, PDF 출력 등 사용자가 요청한 서비스 제공을 위해 보관될 수 있습니다.\n\n보관 목적이 달성되었거나 사용자가 삭제를 요청하면 관련 법령상 보관이 필요한 경우를 제외하고 지체 없이 삭제합니다.",
      privacy_s8_title: "8. 삭제 및 탈퇴",
      privacy_s8_desc: "사용자는 마이페이지 > 계정관리에서 회원탈퇴를 요청할 수 있습니다.\n\n회원탈퇴 시 사용자의 프로필, 연결 정보, 사용자가 소유한 위치 공유 세션과 위치 기록을 삭제하며, Firebase Authentication 계정도 삭제합니다. Apple 또는 Google 계정 연결 해제가 필요한 경우 재인증이 요청될 수 있습니다.",
      privacy_s9_title: "9. 사용자 권리",
      privacy_s9_desc: "사용자는 개인정보 조회, 정정, 삭제, 처리 정지, 동의 철회, 계정 탈퇴를 요청할 수 있습니다.\n\n위치 권한과 알림 권한은 iOS 설정에서 직접 철회할 수 있으며, 앱 내 공유 종료 버튼으로 실시간 공유를 중지할 수 있습니다.",
      privacy_s10_title: "10. 문의",
      privacy_s10_desc: "개인정보 처리와 관련한 문의, 삭제 요청, 권리 행사는 아래 연락처로 요청할 수 있습니다.\n\n담당자: 안재원\n이메일: ajw0376@gmail.com\n\n본 처리방침은 앱 기능, 관련 법령, 외부 서비스 정책 변경에 따라 업데이트될 수 있으며, 중요한 변경 사항은 앱 내에서 안내합니다."
    }
  },
  ja: {
    translation: {
      nav_home: "サービス紹介",
      nav_privacy: "個人情報保護方針",
      hero_title_part1: "あなたの安全のための",
      hero_title_part2: "LocaSOS",
      hero_subtitle: "緊急事態発生時、ワンタッチでリアルタイムの位置共有と緊急通知を同時に解決します。",
      btn_start: "サービスを開始する",
      btn_more: "詳細を見る",
      feature_title: "主な機能",
      f1_title: "リアルタイム位置共有",
      f1_desc: "緊急時に現在地を保護者にリアルタイムで送信し、安全を確保します。",
      f2_title: "移動経路の記録",
      f2_desc: "ユーザーの移動経路を自動的に記録し、予期せぬ状況に備えます。",
      f3_title: "セーフタイマー",
      f3_desc: "設定時間内に応答がない場合、自動的に危険状況を通知します。",
      f4_title: "緊急電話接続",
      f4_desc: "ワンタッチで主要な救急機関や指定の保護者に即座に電話を接続します。",
      footer_copy: "© 2026 LocaSOS. All rights reserved.",
      privacy_title: "LocaSOS プライバシーポリシー",
      privacy_effective_date: "施行日: 2026.05.03",
      privacy_intro: "LocaSOSは、ライブ位置共有とセーフティタイマー機能の提供に必要な情報のみを処理し、広告トラッキング目的で個人情報を使用しません。",
      privacy_s1_title: "1. 収集する情報",
      privacy_s1_desc: "サインイン時に、Firebaseユーザー識別子、メールアドレス、表示名、サインイン提供元情報（Apple、GoogleまたはLocaSOS）、アプリ内共有IDを処理します。LocaSOSアカウントを直接作成する場合、ログインID、ニックネーム、パスワード再設定用の復旧メールを保存します。\n\n接続機能の利用時には、接続されたユーザーの識別子、表示名、メールアドレス、共有ID、接続日時を保存します。\n\nプッシュ通知の提供のため、FCMデバイストークン을 保存する場合があります。",
      privacy_s2_title: "2. 位置情報",
      privacy_s2_desc: "アプリは、ライブ共有、セーフティタイマー、現在地表示などの位置情報機能を使用する際に、端末の位置情報権限を要求します。\n\nライブ共有中は、緯度、経度、位置精度、記録時刻、最新住所を保存する場合があります。セーフティタイマー実行中は、自動共有の判断のために最新位置1件を定期的に更新する場合があります。\n\n位置情報権限はiOS設定でいつでも変更できます。共有終了またはタイマーのキャンセル時には、アプリの位置更新も停止します。",
      privacy_s3_title: "3. 通知",
      privacy_s3_desc: "アプリは、ライブ共有開始、セーフティタイマーの確認要求、自動共有開始などの重要な状態を通知するため、通知権限を要求します。\n\n通知送信のため、FCMトークンをFirebaseに保存する場合があります。通知権限はiOS設定でいつでも変更できます。",
      privacy_s4_title: "4. 情報の共有",
      privacy_s4_desc: "LocaSOSは、ユーザーが接続した相手にのみライブ位置共有セッション情報を提供します。\n\n共有される情報には、共有者の名前または共有ID、共有開始/終了時刻、最後の位置、位置精度、移動経路記録が含まれる場合があります。\n\n法令に基づく場合を除き、広告事業者やデータブローカーに個人情報を販売または提供しません。",
      privacy_s5_title: "5. サブスクリプションと決済",
      privacy_s5_desc: "プレミアムサブスクリプションはApple StoreKitを通じて処理されます。カード番号などの決済手段情報をアプリ開発者が直接収集または保存することはありません。\n\nプレミアム機能を提供するため、アプリはStoreKitで検証されたサブスクリプション状態、商品ID、有効期限などの権限情報を確認する場合があります。",
      privacy_s6_title: "6. 外部サービス",
      privacy_s6_desc: "アプリはサービス提供のため、Firebase Authentication、Cloud Firestore、Firebase Cloud Messaging、Google Sign-In, Apple Sign In, StoreKit, Core Location, MapKit, CLGeocoderを使用します。\n\nFirebaseなど一部の外部サービスは、国外サーバーでデータを保存または処理する場合があります。外部サービス提供者は、それぞれのセキュリティおよびプライバシー基準に従ってデータを処理します。",
      privacy_s7_title: "7. 保管期間",
      privacy_s7_desc: "アカウント情報と接続情報は、アカウントが有効な期間保管されます。\n\nライブ共有履歴、移動経路記録、セーフティタイマー記録は、履歴確認やPDF出力など、ユーザーが要求した機能を提供するために保管される場合があります。\n\n保管目的が達成された場合、またはユーザーが削除を要求した場合、法令上保管が必要な場合を除き、関連情報を遅滞なく削除します。",
      privacy_s8_title: "8. 削除と退会",
      privacy_s8_desc: "ユーザーは、MY > アカウント管理から退会を要求できます。\n\n退会時には、プロフィール、接続情報、ユーザーが所有するライブ共有セッションと関連する位置記録を削除し、Firebase Authenticationアカウントも削除します。AppleまたはGoogleアカウント連携の解除が必要な場合、再認証が求められることがあります。",
      privacy_s9_title: "9. ユーザーの権利",
      privacy_s9_desc: "ユーザーは、個人情報の確認、訂正、削除、処理停止、同意撤回、アカウント削除を要求できます。\n\n位置情報権限と通知権限はiOS設定で直接撤回でき、ライブ共有はアプリ内の共有停止ボタンで停止できます。",
      privacy_s10_title: "10. お問い合わせ",
      privacy_s10_desc: "個人情報の取り扱いに関するお問い合わせ、削除依頼、権利行使は以下までご連絡ください。\n\n担当者: Ahn Jaewon\nメール: ajw0376@gmail.com\n\n本ポリシーは、アプリ機能、関連法令、外部サービスのポリシー変更により更新される場合があります。重要な変更はアプリ内でお知らせします。"
    }
  },
  en: {
    translation: {
      nav_home: "About",
      nav_privacy: "Privacy Policy",
      hero_title_part1: "LocaSOS for",
      hero_title_part2: "Your Safety",
      hero_subtitle: "Solve real-time location sharing and emergency notification at once with a single touch in an emergency.",
      btn_start: "Get Started",
      btn_more: "Learn More",
      feature_title: "Key Features",
      f1_title: "Real-time Location",
      f1_desc: "Secure your safety by sending your current location to guardians in real-time during emergencies.",
      f2_title: "Route Tracking",
      f2_desc: "Automatically record your movements to prepare for unexpected situations.",
      f3_title: "Safe Timer",
      f3_desc: "Automatically notify danger if there is no response within the set time.",
      f4_title: "Emergency Call",
      f4_desc: "Instantly connect to emergency services and guardians with a single touch.",
      footer_copy: "© 2026 LocaSOS. All rights reserved.",
      privacy_title: "LocaSOS Privacy Policy",
      privacy_effective_date: "Effective Date: 2026.05.03",
      privacy_intro: "LocaSOS processes only the information needed to provide live location sharing and Safety Timer features. We do not use personal data for advertising tracking.",
      privacy_s1_title: "1. Information We Collect",
      privacy_s1_desc: "When you sign in, we process your Firebase user identifier, email address, display name, sign-in provider information (Apple, Google, or LocaSOS), and in-app Share ID. If you create a LocaSOS account directly, we store your login ID, nickname, and recovery email for password resets.\n\nWhen you use connections, we store connected users' identifiers, display names, email addresses, Share IDs, and connection times.\n\nWe may store an FCM device token to provide push notifications.",
      privacy_s2_title: "2. Location Data",
      privacy_s2_desc: "The app requests device location permission when you use location-based features such as live sharing, Safety Timer, or current location display.\n\nDuring live sharing, we may store latitude, longitude, location accuracy, record time, and the latest address. While Safety Timer is running, the app may periodically update one latest location to support automatic sharing decisions.\n\nYou can change location permission at any time in iOS Settings. Location updates stop when sharing ends or the timer is canceled.",
      privacy_s3_title: "3. Notifications",
      privacy_s3_desc: "The app requests notification permission to inform you about important states such as live sharing, Safety Timer confirmation requests, and automatic sharing.\n\nWe may store an FCM token in Firebase to send notifications. You can change notification permission at any time in iOS Settings.",
      privacy_s4_title: "4. Sharing Information",
      privacy_s4_desc: "LocaSOS provides live location sharing session information only to users you have connected with.\n\nShared information may include the sharer's name or Share ID, sharing start/end time, last location, location accuracy, and route records.\n\nExcept where required by law, we do not sell or provide personal data to advertisers or data brokers.",
      privacy_s5_title: "5. Subscriptions and Payments",
      privacy_s5_desc: "Premium subscriptions are processed through Apple StoreKit. The app developer does not directly collect or store payment method information such as card numbers.\n\nTo provide premium features, the app may check verified entitlement information from StoreKit, including subscription status, product ID, and expiration date.",
      privacy_s6_title: "6. Third-Party Services",
      privacy_s6_desc: "The app uses Firebase Authentication, Cloud Firestore, Firebase Cloud Messaging, Google Sign-In, Apple Sign In, StoreKit, Core Location, MapKit, and CLGeocoder to provide the service.\n\nSome external services, including Firebase, may store or process data on servers outside your country. External service providers process data under their own security and privacy standards.",
      privacy_s7_title: "7. Retention",
      privacy_s7_desc: "Account information and connection information are retained while your account remains active.\n\nLive share history, route records, and Safety Timer records may be retained to provide features such as history review and PDF export.\n\nWhen the purpose of retention is fulfilled or you request deletion, we delete the relevant information without delay unless retention is required by law.",
      privacy_s8_title: "8. Deletion and Account Closure",
      privacy_s8_desc: "You can request account deletion from MY > Account Management.\n\nWhen you delete your account, we delete your profile, connection information, live sharing sessions you own, and related location records, and then delete your Firebase Authentication account. Reauthentication may be required to disconnect Apple or Google account access.",
      privacy_s9_title: "9. Your Rights",
      privacy_s9_desc: "You may request access, correction, deletion, restriction of processing, withdrawal of consent, or account deletion.\n\nLocation and notification permissions can be withdrawn directly in iOS Settings, and live sharing can be stopped with the in-app stop sharing button.",
      privacy_s10_title: "10. Contact",
      privacy_s10_desc: "For privacy questions, deletion requests, or rights requests, contact us below.\n\nContact: Jaewon Ahn\nEmail: ajw0376@gmail.com\n\nThis policy may be updated due to app feature changes, applicable law, or third-party service policy changes. Important changes will be announced in the app."
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export const detectLanguageByIP = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    const countryCode = data.country_code;
    
    if (countryCode === 'KR') {
      i18n.changeLanguage('ko');
    } else if (countryCode === 'JP') {
      i18n.changeLanguage('ja');
    } else {
      i18n.changeLanguage('en');
    }
  } catch (error) {
    console.error("IP detection failed, using browser language:", error);
  }
};

export default i18n;
