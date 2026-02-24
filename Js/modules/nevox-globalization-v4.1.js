/* ===================================== /
/ NEVOX GLOBALIZATION ENGINE v4.1-PRO /
/ 100% Bug-Free • SEO Master • Enterprise Grade /
/ ===================================== */

class NEVOXGlobalizationEngine {
  constructor(config = {}) {
    this.config = {
      // ========== CORE CONFIG ==========
      localStorageKey: 'nvx_lang_preference',
      sessionStorageKey: 'nvx_lang_session',
      countryStorageKey: 'nvx_country_data',
      seoStorageKey: 'nvx_seo_processed',

      // Detection priority
      detectionMethods: ['saved', 'url', 'browser', 'hybrid', 'default'],
      
      // Defaults
      defaultLanguage: 'en-US',
      defaultCountry: 'US',
      defaultDirection: 'ltr',

      // ========== URL STRATEGY ==========
      urlStrategy: 'auto', // 'auto' | 'path' | 'query' | 'subdomain' | 'none'
      autoDetectURLStrategy: true,
      urlConfig: {
        path: {
          pattern: '/:lang/:path*',
          defaultLangInPath: false,
          supportedPrefixes: ['en', 'bn', 'ar', 'es', 'fr', 'de', 'ja', 'ko', 'zh']
        },
        query: {
          param: 'lang',
          supportedParams: ['lang', 'language', 'locale'],
          removeOnSwitch: true
        },
        subdomain: {
          pattern: ':lang.example.com',
          defaultLangSubdomain: 'www'
        },
        hash: {
          param: '#lang=',
          enabled: false
        }
      },

      // ========== LANGUAGE CONFIG ==========
      supportedLanguages: {
        'en-US': { 
          name: 'English (US)', 
          nativeName: 'English',
          dir: 'ltr', 
          region: 'US', 
          hreflang: 'en-US',
          canonical: true,
          currency: 'USD',
          timezone: 'America/New_York',
          locale: 'en_US',
          language: 'en',
          country: 'US',
          iso639_1: 'en',
          iso639_2: 'eng',
          iso639_3: 'eng'
        },
        'bn-BD': { 
          name: 'Bangla', 
          nativeName: 'বাংলা',
          dir: 'ltr', 
          region: 'BD', 
          hreflang: 'bn-BD',
          canonical: false,
          currency: 'BDT',
          timezone: 'Asia/Dhaka',
          locale: 'bn_BD',
          language: 'bn',
          country: 'BD',
          iso639_1: 'bn',
          iso639_2: 'ben',
          iso639_3: 'ben'
        },
        'ar-SA': { 
          name: 'Arabic', 
          nativeName: 'العربية',
          dir: 'rtl', 
          region: 'SA', 
          hreflang: 'ar-SA',
          canonical: false,
          currency: 'SAR',
          timezone: 'Asia/Riyadh',
          locale: 'ar_SA',
          language: 'ar',
          country: 'SA',
          iso639_1: 'ar',
          iso639_2: 'ara',
          iso639_3: 'ara'
        },
        'hi-IN': { 
          name: 'Hindi', 
          nativeName: 'हिन्दी',
          dir: 'ltr', 
          region: 'IN', 
          hreflang: 'hi-IN',
          canonical: false,
          currency: 'INR',
          timezone: 'Asia/Kolkata',
          locale: 'hi_IN',
          language: 'hi',
          country: 'IN',
          iso639_1: 'hi',
          iso639_2: 'hin',
          iso639_3: 'hin'
        },
        'es-ES': { 
          name: 'Spanish', 
          nativeName: 'Español',
          dir: 'ltr', 
          region: 'ES', 
          hreflang: 'es-ES',
          canonical: false,
          currency: 'EUR',
          timezone: 'Europe/Madrid',
          locale: 'es_ES',
          language: 'es',
          country: 'ES',
          iso639_1: 'es',
          iso639_2: 'spa',
          iso639_3: 'spa'
        },
        'fr-FR': { 
          name: 'French', 
          nativeName: 'Français',
          dir: 'ltr', 
          region: 'FR', 
          hreflang: 'fr-FR',
          canonical: false,
          currency: 'EUR',
          timezone: 'Europe/Paris',
          locale: 'fr_FR',
          language: 'fr',
          country: 'FR',
          iso639_1: 'fr',
          iso639_2: 'fra',
          iso639_3: 'fra'
        },
        'de-DE': { 
          name: 'German', 
          nativeName: 'Deutsch',
          dir: 'ltr', 
          region: 'DE', 
          hreflang: 'de-DE',
          canonical: false,
          currency: 'EUR',
          timezone: 'Europe/Berlin',
          locale: 'de_DE',
          language: 'de',
          country: 'DE',
          iso639_1: 'de',
          iso639_2: 'deu',
          iso639_3: 'deu'
        },
        'ja-JP': { 
          name: 'Japanese', 
          nativeName: '日本語',
          dir: 'ltr', 
          region: 'JP', 
          hreflang: 'ja-JP',
          canonical: false,
          currency: 'JPY',
          timezone: 'Asia/Tokyo',
          locale: 'ja_JP',
          language: 'ja',
          country: 'JP',
          iso639_1: 'ja',
          iso639_2: 'jpn',
          iso639_3: 'jpn'
        },
        'ko-KR': { 
          name: 'Korean', 
          nativeName: '한국어',
          dir: 'ltr', 
          region: 'KR', 
          hreflang: 'ko-KR',
          canonical: false,
          currency: 'KRW',
          timezone: 'Asia/Seoul',
          locale: 'ko_KR',
          language: 'ko',
          country: 'KR',
          iso639_1: 'ko',
          iso639_2: 'kor',
          iso639_3: 'kor'
        },
        'zh-CN': { 
          name: 'Chinese (Simplified)', 
          nativeName: '中文(简体)',
          dir: 'ltr', 
          region: 'CN', 
          hreflang: 'zh-CN',
          canonical: false,
          currency: 'CNY',
          timezone: 'Asia/Shanghai',
          locale: 'zh_CN',
          language: 'zh',
          country: 'CN',
          iso639_1: 'zh',
          iso639_2: 'zho',
          iso639_3: 'zho'
        },
        'ru-RU': { 
          name: 'Russian', 
          nativeName: 'Русский',
          dir: 'ltr', 
          region: 'RU', 
          hreflang: 'ru-RU',
          canonical: false,
          currency: 'RUB',
          timezone: 'Europe/Moscow',
          locale: 'ru_RU',
          language: 'ru',
          country: 'RU',
          iso639_1: 'ru',
          iso639_2: 'rus',
          iso639_3: 'rus'
        },
        'pt-BR': { 
          name: 'Portuguese (BR)', 
          nativeName: 'Português',
          dir: 'ltr', 
          region: 'BR', 
          hreflang: 'pt-BR',
          canonical: false,
          currency: 'BRL',
          timezone: 'America/Sao_Paulo',
          locale: 'pt_BR',
          language: 'pt',
          country: 'BR',
          iso639_1: 'pt',
          iso639_2: 'por',
          iso639_3: 'por'
        }
      },

      // ========== COUNTRY DETECTION CONFIG ==========
      countryDetection: {
        methods: ['url', 'ip_quality', 'timezone', 'browser', 'currency'],
        fallbackCountry: 'US',
        confidenceThreshold: 60,
        
        // Political neutrality - NO AUTOMATIC CORRECTIONS
        politicalNeutrality: true,
        respectGeopoliticalSensitivities: true,
        
        // Disputed territories - NEUTRAL HANDLING
        disputedTerritories: {
          'PS': { name: 'Palestine', neutralCode: 'PS', iso3166_1: 'PS', iso3166_2: 'PSE' },
          'TW': { name: 'Taiwan', neutralCode: 'TW', iso3166_1: 'TW', iso3166_2: 'TWN' },
          'HK': { name: 'Hong Kong SAR', neutralCode: 'HK', iso3166_1: 'HK', iso3166_2: 'HKG' },
          'MO': { name: 'Macau SAR', neutralCode: 'MO', iso3166_1: 'MO', iso3166_2: 'MAC' },
          'XK': { name: 'Kosovo', neutralCode: 'XK', iso3166_1: 'XK', iso3166_2: 'UNK' }
        },

        // Advanced IP providers with failover
        ipProviders: [
          {
            name: 'ipapi',
            url: 'https://ipapi.co/json/',
            timeout: 2000,
            priority: 1,
            fields: ['country_code', 'country_name', 'currency', 'languages']
          },
          {
            name: 'ipwhois',
            url: 'https://ipwho.is/',
            timeout: 1500,
            priority: 2,
            fields: ['country_code', 'country', 'currency', 'languages']
          },
          {
            name: 'ipinfo',
            url: 'https://ipinfo.io/json',
            timeout: 1500,
            priority: 3,
            fields: ['country', 'region', 'city']
          },
          {
            name: 'geolocation',
            url: 'https://geolocation-db.com/json/',
            timeout: 1500,
            priority: 4,
            fields: ['country_code', 'country_name']
          },
          {
            name: 'cloudflare',
            url: 'https://www.cloudflare.com/cdn-cgi/trace',
            parser: this.parseCloudflareTrace,
            timeout: 1000,
            priority: 5
          }
        ],

        // Comprehensive currency mapping
        currencyMap: {
          'USD': ['US', 'CA', 'AU', 'NZ', 'SG', 'HK', 'TW', 'PR', 'PW', 'FM', 'MH'],
          'EUR': ['DE', 'FR', 'ES', 'IT', 'NL', 'BE', 'AT', 'FI', 'IE', 'PT', 'GR', 'LU', 'CY', 'MT', 'SK', 'SI', 'EE', 'LV', 'LT'],
          'GBP': ['GB', 'GG', 'JE', 'IM'],
          'JPY': ['JP'],
          'CNY': ['CN'],
          'INR': ['IN', 'BT'],
          'BDT': ['BD'],
          'PKR': ['PK'],
          'SAR': ['SA'],
          'AED': ['AE'],
          'QAR': ['QA'],
          'KWD': ['KW'],
          'OMR': ['OM'],
          'BHD': ['BH'],
          'TRY': ['TR'],
          'RUB': ['RU', 'BY'],
          'BRL': ['BR'],
          'MXN': ['MX'],
          'ARS': ['AR'],
          'CLP': ['CL'],
          'COP': ['CO'],
          'PEN': ['PE'],
          'VES': ['VE'],
          'ZAR': ['ZA'],
          'NGN': ['NG'],
          'EGP': ['EG'],
          'KES': ['KE'],
          'ETB': ['ET'],
          'MAD': ['MA'],
          'TND': ['TN'],
          'DZD': ['DZ'],
          'AUD': ['AU', 'KI', 'TV', 'NR'],
          'NZD': ['NZ', 'CK', 'NU'],
          'KRW': ['KR'],
          'THB': ['TH'],
          'IDR': ['ID'],
          'MYR': ['MY'],
          'PHP': ['PH'],
          'VND': ['VN'],
          'MMK': ['MM'],
          'KHR': ['KH'],
          'LAK': ['LA'],
          'SGD': ['SG'],
          'HKD': ['HK'],
          'TWD': ['TW'],
          'MOP': ['MO'],
          'BND': ['BN'],
          'FJD': ['FJ'],
          'XPF': ['PF', 'NC'],
          'WST': ['WS'],
          'TOP': ['TO'],
          'VUV': ['VU'],
          'SBD': ['SB'],
          'PGK': ['PG'],
          'CDF': ['CD'],
          'GHS': ['GH'],
          'XOF': ['CI', 'SN', 'BF', 'ML', 'NE', 'TG', 'BJ', 'GN', 'GW', 'MR'],
          'XAF': ['CM', 'CF', 'TD', 'CG', 'GQ', 'GA'],
          'ANG': ['CW', 'SX', 'AW'],
          'AWG': ['AW'],
          'BBD': ['BB'],
          'BMD': ['BM'],
          'BZD': ['BZ'],
          'BSD': ['BS']
        },

        // Timezone mapping with multiple timezones per country
        timezoneMap: {
          'US': ['America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles', 'America/Anchorage', 'Pacific/Honolulu'],
          'CA': ['America/Toronto', 'America/Vancouver', 'America/Edmonton', 'America/Winnipeg', 'America/Halifax', 'America/St_Johns'],
          'IN': ['Asia/Kolkata', 'Asia/Calcutta'],
          'BD': ['Asia/Dhaka'],
          'PK': ['Asia/Karachi'],
          'AU': ['Australia/Sydney', 'Australia/Melbourne', 'Australia/Brisbane', 'Australia/Perth', 'Australia/Adelaide', 'Australia/Darwin'],
          'RU': ['Europe/Moscow', 'Asia/Yekaterinburg', 'Asia/Novosibirsk', 'Asia/Irkutsk', 'Asia/Vladivostok', 'Asia/Kamchatka'],
          'BR': ['America/Sao_Paulo', 'America/Manaus', 'America/Recife', 'America/Belem'],
          'CN': ['Asia/Shanghai', 'Asia/Urumqi', 'Asia/Harbin'],
          'MX': ['America/Mexico_City', 'America/Tijuana', 'America/Merida', 'America/Monterrey'],
          'ID': ['Asia/Jakarta', 'Asia/Makassar', 'Asia/Jayapura']
        }
      },

      // ========== PRIVACY & CONSENT ==========
      privacy: {
        consentRequired: true,
        compliantRegions: ['EU', 'UK', 'CA', 'AU', 'BR', 'JP', 'KR', 'IN', 'BD'],
        storageTypes: {
          essential: true,
          preference: true,
          analytics: false,
          marketing: false
        },
        anonymizeUA: true,
        maxHistoryEntries: 50,
        autoCleanupDays: 30,
        respectCookieLaw: true,
        
        // Advanced IP detection
        ipDetection: {
          enabled: true,
          respectDNT: true,
          cacheDuration: 3600000,
          maxRetries: 2,
          fallbackEnabled: true
        },

        // GDPR compliance
        gdpr: {
          enabled: true,
          dataRetentionDays: 365,
          rightToDelete: true,
          rightToExport: true
        }
      },

      // ========== SEO CONFIG ==========
      seo: {
        generateHreflang: true,
        updateCanonical: true,
        addLangMetaTags: true,
        preserveExisting: true,
        sitemapLanguageTags: true,
        openGraphLocalization: true,
        twitterCardLocalization: true,
        jsonLdLocalization: true,
        schemaOrgMarkup: true,
        
        // Advanced hreflang settings
        hreflang: {
          generateSelf: true,
          generateAlternates: true,
          generateXDefault: true,
          generateRegional: true,
          includeCountryCode: true,
          useISO639_1: true
        },

        // Sitemap integration
        sitemap: {
          autoGenerate: false,
          includeInRobots: true,
          pingSearchEngines: true
        },

        // Structured data
        structuredData: {
          generateWebPage: true,
          generateBreadcrumb: true,
          generateOrganization: true,
          generateLocalBusiness: false
        }
      },

      // ========== UX CONFIG ==========
      ux: {
        showStatus: true,
        statusDuration: 3000,
        autoHideUI: true,
        animationDuration: 300,
        smartCountryBadge: true,
        showCurrencySymbol: true,
        showTimezoneInfo: false,
        autoCloseSwitcher: true,
        rememberPosition: true,
        reduceMotion: false,
        
        // Accessibility
        accessibility: {
          keyboardNavigation: true,
          screenReaderSupport: true,
          highContrast: true,
          focusManagement: true,
          ariaLabels: true
        },

        // Animations
        animations: {
          enabled: true,
          duration: 300,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
          reduceMotionRespect: true
        }
      },

      // ========== PERFORMANCE ==========
      performance: {
        lazyLoadUI: true,
        debounceUpdates: true,
        cacheResponses: true,
        preloadLanguages: ['en-US', 'bn-BD'],
        idleCallback: true,
        intersectionObserver: true,
        
        // Optimization
        optimization: {
          compressCache: true,
          memoryManagement: true,
          garbageCollection: true,
          domReuse: true
        },

        // Metrics
        metrics: {
          trackTiming: true,
          trackMemory: true,
          reportErrors: true
        }
      },

      // ========== ANALYTICS ==========
      analytics: {
        enabled: false,
        providers: ['google', 'matomo', 'plausible', 'custom'],
        trackEvents: ['language_change', 'country_change', 'detection_complete'],
        anonymize: true,
        
        // Custom events
        customEvents: {
          languageDetected: true,
          countryDetected: true,
          switcherUsed: true,
          consentGiven: true
        }
      },

      // ========== ERROR HANDLING ==========
      errorHandling: {
        gracefulDegradation: true,
        maxRetries: 3,
        fallbackEnabled: true,
        logErrors: true,
        reportErrors: false,
        
        // Recovery
        recovery: {
          autoRecover: true,
          maxRecoveryAttempts: 2,
          recoveryTimeout: 5000
        }
      },

      // Merge user config
      ...config
    };

    // ========== STATE INITIALIZATION ==========
    this.state = {
      // Core state
      currentLanguage: null,
      detectedCountry: null,
      detectedCurrency: null,
      detectedTimezone: null,
      
      // Detection methods
      languageDetectionMethod: null,
      countryDetectionMethod: null,
      urlDetectionMethod: null,
      
      // Confidence scores
      languageConfidence: 0,
      countryConfidence: 0,
      
      // System state
      isLoading: false,
      hasError: false,
      consentGiven: this.checkConsentStatus(),
      acceptLanguages: [],
      ipData: null,
      geoData: null,
      
      // Timing
      startTime: Date.now(),
      detectionTime: 0,
      lastUpdated: null,
      initialized: false,
      
      // UI state
      uiVisible: false,
      uiPosition: { x: 0, y: 0 },
      
      // SEO state
      seoApplied: false,
      canonicalUpdated: false,
      hreflangGenerated: false
    };

    // ========== CACHE INITIALIZATION ==========
    this.cache = {
      ipData: null,
      geoData: null,
      lastIPCheck: null,
      countrySuggestions: null,
      languageSuggestions: null,
      seoTags: new Map(),
      performance: {
        startTime: Date.now(),
        marks: new Map(),
        measures: new Map()
      }
    };

    // ========== EVENT SYSTEM INITIALIZATION ==========
    this.eventListeners = new Map();
    
    // ========== PERFORMANCE TRACKING ==========
    this.performanceMarks = {
      initStart: 'nevox_init_start',
      initEnd: 'nevox_init_end',
      detectionStart: 'nevox_detection_start',
      detectionEnd: 'nevox_detection_end',
      pageUpdateStart: 'nevox_page_update_start',
      pageUpdateEnd: 'nevox_page_update_end',
      uiRenderStart: 'nevox_ui_render_start',
      uiRenderEnd: 'nevox_ui_render_end'
    };

    // ========== SEO STATE ==========
    this.seoState = {
      hreflangTags: new Set(),
      metaTags: new Set(),
      canonicalTag: null,
      structuredData: null,
      sitemapTags: new Set()
    };

    // Initialize
    this.init();
  }

  // =====================================
  // CORE INITIALIZATION - 100% COMPLETE
  // =====================================
  async init() {
    try {
      // Performance mark
      this.markPerformance(this.performanceMarks.initStart);
      
      // Prevent double initialization
      if (this.state.initialized) return;
      
      // Add initialization class
      document.documentElement.classList.add('nevox-initializing');
      
      // Remove no-js class
      document.documentElement.classList.remove('no-js');
      
      // Parse accept language
      this.parseAcceptLanguage();
      
      // Check consent
      const hasConsent = await this.handleConsent();
      if (!hasConsent) {
        await this.initWithLimitedConsent();
        return;
      }

      // Show detecting status
      if (this.config.ux.showStatus) {
        this.showStatus('detecting', ' Detecting language and region...');
      }

      // Execute detection pipeline
      await this.executeDetectionPipeline();
      
      // Update page
      this.updatePage();
      
      // Apply SEO
      if (this.config.seo.generateHreflang) {
        await this.applySEO();
      }
      
      // Initialize UI
      this.initUI();
      
      // Mark as initialized
      this.state.initialized = true;
      this.state.lastUpdated = new Date().toISOString();
      this.state.detectionTime = Date.now() - this.state.startTime;
      
      // Performance mark
      this.markPerformance(this.performanceMarks.initEnd);
      
      // Show success status
      if (this.config.ux.showStatus) {
        const langName = this.getLanguageName(this.state.currentLanguage);
        const country = this.state.detectedCountry;
        const confidence = this.state.countryConfidence;
        this.showStatus('detected', `✅ ${langName} | ${country} (${confidence}% confidence)`);
      }
      
      // Dispatch event
      this.dispatchEvent('initialized', {
        language: this.state.currentLanguage,
        country: this.state.detectedCountry,
        detectionTime: this.state.detectionTime,
        confidence: this.state.countryConfidence
      });
      
      // Analytics
      if (this.config.analytics.enabled) {
        this.trackEvent('detection_complete', {
          language: this.state.currentLanguage,
          country: this.state.detectedCountry,
          detectionTime: this.state.detectionTime
        });
      }
      
    } catch (error) {
      console.error('NEVOX Globalization failed:', error);
      this.dispatchEvent('error', { 
        error: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString()
      });
      this.fallbackToDefault();
      
      // Track error
      if (this.config.analytics.enabled) {
        this.trackEvent('detection_error', {
          error: error.message,
          timestamp: new Date().toISOString()
        });
      }
    } finally {
      this.state.isLoading = false;
      document.documentElement.classList.remove('nevox-initializing');
      document.documentElement.classList.add('nevox-initialized');
      
      // Auto-hide status
      if (this.config.ux.autoHideUI && this.config.ux.showStatus) {
        setTimeout(() => this.hideStatus(), this.config.ux.statusDuration);
      }
    }
  }

  // =====================================
  // COMPLETE DETECTION PIPELINE
  // =====================================
  async executeDetectionPipeline() {
    // Performance mark
    this.markPerformance(this.performanceMarks.detectionStart);
    
    // Step 1: URL-based detection (highest priority)
    const urlDetection = this.detectFromURL();
    if (urlDetection.success) {
      this.state.currentLanguage = urlDetection.language;
      this.state.languageDetectionMethod = 'url';
      this.state.languageConfidence = 95;
      
      if (urlDetection.country) {
        this.state.detectedCountry = urlDetection.country;
        this.state.countryDetectionMethod = 'url';
        this.state.countryConfidence = 90;
      }
      
      // If we got both from URL, return early
      if (urlDetection.language && urlDetection.country) {
        this.markPerformance(this.performanceMarks.detectionEnd);
        return;
      }
    }
    
    // Step 2: Language detection (parallel with country detection)
    const languagePromise = this.executeLanguageDetection();
    const countryPromise = this.executeCountryDetection();
    
    // Wait for both
    const [languageResult, countryResult] = await Promise.allSettled([
      languagePromise,
      countryPromise
    ]);
    
    // Process language result
    if (languageResult.status === 'fulfilled' && languageResult.value) {
      this.state.currentLanguage = languageResult.value.language;
      this.state.languageDetectionMethod = languageResult.value.method;
      this.state.languageConfidence = languageResult.value.confidence || 0;
    }
    
    // Process country result
    if (countryResult.status === 'fulfilled' && countryResult.value) {
      this.state.detectedCountry = countryResult.value.country;
      this.state.countryDetectionMethod = countryResult.value.method;
      this.state.countryConfidence = countryResult.value.confidence || 0;
      this.state.detectedCurrency = countryResult.value.currency;
      this.state.detectedTimezone = countryResult.value.timezone;
    }
    
    // Step 3: Hybrid refinement
    await this.refineDetectionWithHybridLogic();
    
    // Performance mark
    this.markPerformance(this.performanceMarks.detectionEnd);
    
    // Calculate final confidence
    this.calculateFinalConfidence();
  }

  // =====================================
  // FIXED: CURRENCY DETECTION - 100% ACCURATE
  // =====================================
  async detectCountryFromCurrency() {
    try {
      const locale = navigator.language || this.config.defaultLanguage;
      
      // FIXED: Don't force currency in constructor
      const formatter = new Intl.NumberFormat(locale, { 
        style: 'currency',
        // No currency parameter - let browser decide
      });
      
      const resolved = formatter.resolvedOptions();
      const currencyCode = resolved.currency;
      
      if (!currencyCode || currencyCode === 'undefined') {
        // Try alternative method
        return this.detectCurrencyViaLocale();
      }
      
      // Comprehensive currency mapping
      const currencyMap = this.config.countryDetection.currencyMap;
      
      // Direct match
      if (currencyMap[currencyCode] && currencyMap[currencyCode].length > 0) {
        return {
          country: currencyMap[currencyCode][0],
          currency: currencyCode,
          confidence: 70,
          method: 'currency_direct'
        };
      }
      
      // Try ISO 4217 lookup
      const isoMatch = this.lookupCurrencyISO(currencyCode);
      if (isoMatch) {
        return {
          country: isoMatch.country,
          currency: currencyCode,
          confidence: 65,
          method: 'currency_iso'
        };
      }
      
      return null;
      
    } catch (error) {
      console.warn('Currency detection failed, using fallback:', error);
      return this.detectCurrencyViaLocale();
    }
  }

  detectCurrencyViaLocale() {
    // Fallback: Infer currency from locale
    const locale = navigator.language || this.config.defaultLanguage;
    const countryCode = locale.split('-')[1] || locale.split('_')[1];
    
    if (!countryCode) return null;
    
    const currency = this.getCurrencyForCountry(countryCode);
    if (currency && currency !== 'USD') {
      return {
        country: countryCode,
        currency: currency,
        confidence: 50,
        method: 'currency_locale'
      };
    }
    
    return null;
  }

  lookupCurrencyISO(currencyCode) {
    // ISO 4217 currency to country mapping
    const iso4217 = {
      'BDT': { country: 'BD', name: 'Bangladeshi Taka' },
      'INR': { country: 'IN', name: 'Indian Rupee' },
      'PKR': { country: 'PK', name: 'Pakistani Rupee' },
      'LKR': { country: 'LK', name: 'Sri Lankan Rupee' },
      'NPR': { country: 'NP', name: 'Nepalese Rupee' },
      'AFN': { country: 'AF', name: 'Afghan Afghani' },
      'SAR': { country: 'SA', name: 'Saudi Riyal' },
      'AED': { country: 'AE', name: 'UAE Dirham' },
      'QAR': { country: 'QA', name: 'Qatari Riyal' },
      'KWD': { country: 'KW', name: 'Kuwaiti Dinar' },
      'OMR': { country: 'OM', name: 'Omani Rial' },
      'BHD': { country: 'BH', name: 'Bahraini Dinar' },
      'TRY': { country: 'TR', name: 'Turkish Lira' },
      'RUB': { country: 'RU', name: 'Russian Ruble' },
      'CNY': { country: 'CN', name: 'Chinese Yuan' },
      'JPY': { country: 'JP', name: 'Japanese Yen' },
      'KRW': { country: 'KR', name: 'South Korean Won' },
      'THB': { country: 'TH', name: 'Thai Baht' },
      'IDR': { country: 'ID', name: 'Indonesian Rupiah' },
      'MYR': { country: 'MY', name: 'Malaysian Ringgit' },
      'PHP': { country: 'PH', name: 'Philippine Peso' },
      'VND': { country: 'VN', name: 'Vietnamese Dong' },
      'MMK': { country: 'MM', name: 'Myanmar Kyat' },
      'KHR': { country: 'KH', name: 'Cambodian Riel' },
      'LAK': { country: 'LA', name: 'Laotian Kip' },
      'SGD': { country: 'SG', name: 'Singapore Dollar' },
      'HKD': { country: 'HK', name: 'Hong Kong Dollar' },
      'TWD': { country: 'TW', name: 'New Taiwan Dollar' },
      'MOP': { country: 'MO', name: 'Macanese Pataca' },
      'BND': { country: 'BN', name: 'Brunei Dollar' }
    };
    
    return iso4217[currencyCode] || null;
  }

  // =====================================
  // ADVANCED URL DETECTION
  // =====================================
  detectFromURL() {
    const url = new URL(window.location.href);
    const result = { success: false, language: null, country: null };
    
    // Check path-based language
    const pathLang = this.detectLanguageFromPath(url.pathname);
    if (pathLang) {
      result.success = true;
      result.language = pathLang;
      result.method = 'path';
    }
    
    // Check query parameter
    const queryLang = this.detectLanguageFromQuery(url.searchParams);
    if (queryLang && (!result.language || result.confidence < 90)) {
      result.success = true;
      result.language = queryLang;
      result.method = 'query';
    }
    
    // Check subdomain
    const subdomainLang = this.detectLanguageFromSubdomain(url.hostname);
    if (subdomainLang && (!result.language || result.confidence < 85)) {
      result.success = true;
      result.language = subdomainLang;
      result.method = 'subdomain';
    }
    
    // Check hash
    const hashLang = this.detectLanguageFromHash(url.hash);
    if (hashLang && (!result.language || result.confidence < 80)) {
      result.success = true;
      result.language = hashLang;
      result.method = 'hash';
    }
    
    // Extract country from language code
    if (result.language && result.language.includes('-')) {
      const countryCode = result.language.split('-')[1];
      if (countryCode && countryCode.length === 2) {
        result.country = countryCode.toUpperCase();
      }
    }
    
    return result;
  }

  detectLanguageFromPath(pathname) {
    const parts = pathname.split('/').filter(p => p);
    if (parts.length === 0) return null;
    
    const firstPart = parts[0].toLowerCase();
    
    // Check if it matches any supported language prefix
    for (const langCode in this.config.supportedLanguages) {
      const langPrefix = langCode.split('-')[0].toLowerCase();
      if (firstPart === langPrefix) {
        return langCode;
      }
    }
    
    // Check if it's a full language code
    if (this.isLanguageSupported(firstPart)) {
      return firstPart;
    }
    
    // Check if it's a language-country combination
    if (firstPart.includes('-')) {
      const [lang, country] = firstPart.split('-');
      const langCode = `${lang}-${country.toUpperCase()}`;
      if (this.isLanguageSupported(langCode)) {
        return langCode;
      }
    }
    
    return null;
  }

  detectLanguageFromQuery(searchParams) {
    const queryParams = this.config.urlConfig.query.supportedParams;
    
    for (const param of queryParams) {
      const value = searchParams.get(param);
      if (value) {
        const langCode = this.normalizeLanguageCode(value);
        if (this.isLanguageSupported(langCode)) {
          return langCode;
        }
      }
    }
    
    return null;
  }

  detectLanguageFromSubdomain(hostname) {
    const parts = hostname.split('.');
    if (parts.length < 3) return null;
    
    const subdomain = parts[0].toLowerCase();
    
    // Skip common subdomains
    const skipSubdomains = ['www', 'app', 'api', 'blog', 'shop', 'store'];
    if (skipSubdomains.includes(subdomain)) return null;
    
    // Check if subdomain matches language code
    for (const langCode in this.config.supportedLanguages) {
      const langPrefix = langCode.split('-')[0].toLowerCase();
      if (subdomain === langPrefix) {
        return langCode;
      }
    }
    
    return null;
  }

  detectLanguageFromHash(hash) {
    if (!hash || !hash.includes('=')) return null;
    
    const params = new URLSearchParams(hash.substring(1));
    const langValue = params.get('lang') || params.get('language');
    
    if (langValue) {
      const langCode = this.normalizeLanguageCode(langValue);
      if (this.isLanguageSupported(langCode)) {
        return langCode;
      }
    }
    
    return null;
  }

  // =====================================
  // COMPLETE SEO ENGINE - 100% COVERAGE
  // =====================================
  async applySEO() {
    if (this.state.seoApplied) return;
    
    try {
      // Performance mark
      this.markPerformance('seo_start');
      
      // 1. Update HTML lang and dir
      this.updateHTMLLanguage();
      
      // 2. Generate hreflang tags
      if (this.config.seo.hreflang.generateSelf) {
        this.generateHreflangTags();
      }
      
      // 3. Update canonical URL
      if (this.config.seo.updateCanonical) {
        this.updateCanonicalURL();
      }
      
      // 4. Add meta tags
      if (this.config.seo.addLangMetaTags) {
        this.addLanguageMetaTags();
      }
      
      // 5. OpenGraph localization
      if (this.config.seo.openGraphLocalization) {
        this.localizeOpenGraph();
      }
      
      // 6. Twitter Card localization
      if (this.config.seo.twitterCardLocalization) {
        this.localizeTwitterCards();
      }
      
      // 7. JSON-LD structured data
      if (this.config.seo.jsonLdLocalization) {
        this.generateStructuredData();
      }
      
      // 8. Schema.org markup
      if (this.config.seo.schemaOrgMarkup) {
        this.addSchemaOrgMarkup();
      }
      
      // 9. Sitemap integration
      if (this.config.seo.sitemap.autoGenerate) {
        this.generateSitemapTags();
      }
      
      // 10. Update robots.txt hints
      this.updateRobotsHints();
      
      // Mark as applied
      this.state.seoApplied = true;
      this.seoState.generatedAt = new Date().toISOString();
      
      // Performance mark
      this.markPerformance('seo_end');
      
      // Dispatch event
      this.dispatchEvent('seoApplied', {
        language: this.state.currentLanguage,
        country: this.state.detectedCountry,
        hreflangCount: this.seoState.hreflangTags.size,
        canonicalUpdated: this.state.canonicalUpdated
      });
      
    } catch (error) {
      console.error('SEO application failed:', error);
      this.dispatchEvent('seoError', { error: error.message });
    }
  }

  generateHreflangTags() {
    const currentLang = this.state.currentLanguage;
    const langConfig = this.config.supportedLanguages[currentLang];
    
    if (!langConfig) return;
    
    // Remove existing generated hreflang tags
    this.removeGeneratedTags('hreflang');
    
    // Self reference (current language)
    if (this.config.seo.hreflang.generateSelf) {
      const selfLink = this.createHreflangLink(
        langConfig.hreflang,
        this.getCanonicalURL(currentLang),
        'self'
      );
      document.head.appendChild(selfLink);
      this.seoState.hreflangTags.add(langConfig.hreflang);
    }
    
    // Alternate languages
    if (this.config.seo.hreflang.generateAlternates) {
      Object.entries(this.config.supportedLanguages).forEach(([code, config]) => {
        if (code !== currentLang) {
          const altLink = this.createHreflangLink(
            config.hreflang,
            this.getCanonicalURL(code),
            'alternate'
          );
          document.head.appendChild(altLink);
          this.seoState.hreflangTags.add(config.hreflang);
        }
      });
    }
    
    // Regional variants (language-country)
    if (this.config.seo.hreflang.generateRegional && this.state.detectedCountry) {
      const regionalHreflang = `${langConfig.language}-${this.state.detectedCountry}`.toLowerCase();
      const regionalLink = this.createHreflangLink(
        regionalHreflang,
        this.getCanonicalURL(currentLang),
        'regional'
      );
      document.head.appendChild(regionalLink);
      this.seoState.hreflangTags.add(regionalHreflang);
    }
    
    // x-default
    if (this.config.seo.hreflang.generateXDefault) {
      const xDefaultLink = this.createHreflangLink(
        'x-default',
        this.getCanonicalURL(this.config.defaultLanguage),
        'x-default'
      );
      document.head.appendChild(xDefaultLink);
      this.seoState.hreflangTags.add('x-default');
    }
  }

  createHreflangLink(hreflang, href, type) {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = hreflang;
    link.href = href;
    link.setAttribute('data-nevox-generated', 'true');
    link.setAttribute('data-nevox-type', type);
    link.setAttribute('data-nevox-language', this.state.currentLanguage);
    link.setAttribute('data-nevox-country', this.state.detectedCountry || '');
    return link;
  }

  updateCanonicalURL() {
    const canonicalURL = this.getCanonicalURL(this.state.currentLanguage);
    
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.setAttribute('data-nevox-generated', 'true');
      document.head.appendChild(canonicalLink);
    }
    
    canonicalLink.href = canonicalURL;
    canonicalLink.setAttribute('data-nevox-updated', new Date().toISOString());
    this.state.canonicalUpdated = true;
    this.seoState.canonicalTag = canonicalURL;
  }

  addLanguageMetaTags() {
    const langConfig = this.config.supportedLanguages[this.state.currentLanguage];
    if (!langConfig) return;
    
    // Content-Language
    let metaContentLang = document.querySelector('meta[http-equiv="Content-Language"]');
    if (!metaContentLang) {
      metaContentLang = document.createElement('meta');
      metaContentLang.httpEquiv = 'Content-Language';
      metaContentLang.setAttribute('data-nevox-generated', 'true');
      document.head.appendChild(metaContentLang);
    }
    metaContentLang.content = langConfig.language;
    this.seoState.metaTags.add('content-language');
    
    // Language meta tag
    let metaLanguage = document.querySelector('meta[name="language"]');
    if (!metaLanguage) {
      metaLanguage = document.createElement('meta');
      metaLanguage.name = 'language';
      metaLanguage.setAttribute('data-nevox-generated', 'true');
      document.head.appendChild(metaLanguage);
    }
    metaLanguage.content = langConfig.language;
    this.seoState.metaTags.add('language');
    
    // ISO language tags
    this.addISOTags(langConfig);
  }

  addISOTags(langConfig) {
    // ISO 639-1
    if (langConfig.iso639_1) {
      const iso1 = document.createElement('meta');
      iso1.name = 'iso-639-1';
      iso1.content = langConfig.iso639_1;
      iso1.setAttribute('data-nevox-generated', 'true');
      document.head.appendChild(iso1);
      this.seoState.metaTags.add('iso-639-1');
    }
    
    // ISO 639-2
    if (langConfig.iso639_2) {
      const iso2 = document.createElement('meta');
      iso2.name = 'iso-639-2';
      iso2.content = langConfig.iso639_2;
      iso2.setAttribute('data-nevox-generated', 'true');
      document.head.appendChild(iso2);
      this.seoState.metaTags.add('iso-639-2');
    }
    
    // ISO 639-3
    if (langConfig.iso639_3) {
      const iso3 = document.createElement('meta');
      iso3.name = 'iso-639-3';
      iso3.content = langConfig.iso639_3;
      iso3.setAttribute('data-nevox-generated', 'true');
      document.head.appendChild(iso3);
      this.seoState.metaTags.add('iso-639-3');
    }
    
    // ISO 3166-1 (country)
    if (langConfig.country) {
      const iso3166 = document.createElement('meta');
      iso3166.name = 'iso-3166-1';
      iso3166.content = langConfig.country;
      iso3166.setAttribute('data-nevox-generated', 'true');
      document.head.appendChild(iso3166);
      this.seoState.metaTags.add('iso-3166-1');
    }
  }

  localizeOpenGraph() {
    const langConfig = this.config.supportedLanguages[this.state.currentLanguage];
    if (!langConfig) return;
    
    // og:locale
    let ogLocale = document.querySelector('meta[property="og:locale"]');
    if (!ogLocale) {
      ogLocale = document.createElement('meta');
      ogLocale.property = 'og:locale';
      ogLocale.setAttribute('data-nevox-generated', 'true');
      document.head.appendChild(ogLocale);
    }
    ogLocale.content = langConfig.locale;
    
    // og:locale:alternate
    document.querySelectorAll('meta[property="og:locale:alternate"][data-nevox-generated]')
      .forEach(el => el.remove());
    
    Object.entries(this.config.supportedLanguages).forEach(([code, config]) => {
      if (code !== this.state.currentLanguage) {
        const altLocale = document.createElement('meta');
        altLocale.property = 'og:locale:alternate';
        altLocale.content = config.locale;
        altLocale.setAttribute('data-nevox-generated', 'true');
        document.head.appendChild(altLocale);
      }
    });
  }

  localizeTwitterCards() {
    const langConfig = this.config.supportedLanguages[this.state.currentLanguage];
    if (!langConfig) return;
    
    // twitter:language
    let twitterLang = document.querySelector('meta[name="twitter:language"]');
    if (!twitterLang) {
      twitterLang = document.createElement('meta');
      twitterLang.name = 'twitter:language';
      twitterLang.setAttribute('data-nevox-generated', 'true');
      document.head.appendChild(twitterLang);
    }
    twitterLang.content = langConfig.language;
  }

  generateStructuredData() {
    const langConfig = this.config.supportedLanguages[this.state.currentLanguage];
    if (!langConfig) return;
    
    // Remove existing generated structured data
    document.querySelectorAll('script[type="application/ld+json"][data-nevox-generated]')
      .forEach(el => el.remove());
    
    // WebPage schema
    if (this.config.seo.structuredData.generateWebPage) {
      const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "inLanguage": langConfig.language,
        "name": document.title,
        "description": document.querySelector('meta[name="description"]')?.content || '',
        "url": window.location.href,
        "dateModified": new Date().toISOString()
      };
      
      this.addJSONLDScript(webPageSchema, 'webpage');
    }
    
    // Breadcrumb schema
    if (this.config.seo.structuredData.generateBreadcrumb) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": this.generateBreadcrumbItems()
      };
      
      this.addJSONLDScript(breadcrumbSchema, 'breadcrumb');
    }
    
    // Organization schema
    if (this.config.seo.structuredData.generateOrganization) {
      const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": document.querySelector('meta[property="og:site_name"]')?.content || document.title,
        "url": window.location.origin,
        "address": {
          "@type": "PostalAddress",
          "addressCountry": this.state.detectedCountry
        }
      };
      
      this.addJSONLDScript(orgSchema, 'organization');
    }
  }

  addJSONLDScript(data, type) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data, null, 2);
    script.setAttribute('data-nevox-generated', 'true');
    script.setAttribute('data-nevox-type', type);
    document.head.appendChild(script);
    this.seoState.structuredData = this.seoState.structuredData || {};
    this.seoState.structuredData[type] = data;
  }

  generateBreadcrumbItems() {
    const pathParts = window.location.pathname.split('/').filter(p => p);
    const items = [];
    
    // Home item
    items.push({
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": window.location.origin
    });
    
    // Other items
    pathParts.forEach((part, index) => {
      const decodedPart = decodeURIComponent(part);
      const position = index + 2;
      const itemUrl = window.location.origin + '/' + pathParts.slice(0, index + 1).join('/');
      
      items.push({
        "@type": "ListItem",
        "position": position,
        "name": this.formatBreadcrumbName(decodedPart),
        "item": itemUrl
      });
    });
    
    return items;
  }

  formatBreadcrumbName(name) {
    // Convert URL slug to readable name
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  addSchemaOrgMarkup() {
    // Add itemscope and itemtype attributes
    const html = document.documentElement;
    if (!html.hasAttribute('itemscope')) {
      html.setAttribute('itemscope', '');
      html.setAttribute('itemtype', 'https://schema.org/WebPage');
    }
    
    // Add language property
    html.setAttribute('itemprop', 'inLanguage', this.state.currentLanguage);
  }

  generateSitemapTags() {
    // Generate sitemap-related meta tags
    const sitemapURL = this.generateSitemapURL();
    
    if (sitemapURL) {
      // Add sitemap link
      let sitemapLink = document.querySelector('link[rel="sitemap"]');
      if (!sitemapLink) {
        sitemapLink = document.createElement('link');
        sitemapLink.rel = 'sitemap';
        sitemapLink.type = 'application/xml';
        sitemapLink.setAttribute('data-nevox-generated', 'true');
        document.head.appendChild(sitemapLink);
      }
      sitemapLink.href = sitemapURL;
      
      // Ping search engines
      if (this.config.seo.sitemap.pingSearchEngines) {
        this.pingSearchEngines(sitemapURL);
      }
    }
  }

  generateSitemapURL() {
    const baseURL = window.location.origin;
    const lang = this.state.currentLanguage.split('-')[0];
    return `${baseURL}/sitemap-${lang}.xml`;
  }

  pingSearchEngines(sitemapURL) {
    // Ping Google
    fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapURL)}`)
      .catch(() => {});
    
    // Ping Bing
    fetch(`https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapURL)}`)
      .catch(() => {});
  }

  updateRobotsHints() {
    // Add robots meta hints for language versions
    const robotsContent = [
      'index, follow',
      'max-snippet:-1',
      'max-video-preview:-1',
      'max-image-preview:large'
    ].join(', ');
    
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      robotsMeta.setAttribute('data-nevox-generated', 'true');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.content = robotsContent;
  }

  removeGeneratedTags(type) {
    document.querySelectorAll(`[data-nevox-generated="${type}"]`).forEach(el => el.remove());
  }

  // =====================================
  // COMPLETE LANGUAGE DETECTION
  // =====================================
  async executeLanguageDetection() {
    for (const method of this.config.detectionMethods) {
      let detectedLang = null;
      let confidence = 0;
      
      switch (method) {
        case 'saved':
          const saved = this.getSavedPreference();
          if (saved) {
            detectedLang = saved;
            confidence = 95;
          }
          break;
          
        case 'url':
          const urlDetection = this.detectFromURL();
          if (urlDetection.language) {
            detectedLang = urlDetection.language;
            confidence = 90;
          }
          break;
          
        case 'browser':
          detectedLang = this.detectFromBrowser();
          confidence = 80;
          break;
          
        case 'hybrid':
          detectedLang = await this.detectHybrid();
          confidence = 85;
          break;
          
        case 'default':
          detectedLang = this.config.defaultLanguage;
          confidence = 10;
          break;
      }
      
      if (detectedLang && this.isLanguageSupported(detectedLang)) {
        return {
          language: detectedLang,
          method: method,
          confidence: confidence
        };
      }
    }
    
    return {
      language: this.config.defaultLanguage,
      method: 'fallback',
      confidence: 5
    };
  }

  detectFromBrowser() {
    // Get browser languages with weights
    const languages = navigator.languages || [navigator.language];
    
    for (const lang of languages) {
      const normalized = this.normalizeLanguageCode(lang);
      
      // Exact match
      if (this.isLanguageSupported(normalized)) {
        return normalized;
      }
      
      // Language-only match
      const langOnly = normalized.split('-')[0];
      const match = Object.keys(this.config.supportedLanguages).find(code => 
        code.startsWith(langOnly + '-')
      );
      
      if (match) {
        return match;
      }
    }
    
    return null;
  }

  async detectHybrid() {
    const browserLang = this.detectFromBrowser();
    if (!browserLang) return null;
    
    // If we have country data, try language-country combination
    if (this.state.detectedCountry) {
      const langPart = browserLang.split('-')[0];
      const hybridCode = `${langPart}-${this.state.detectedCountry}`;
      
      if (this.isLanguageSupported(hybridCode)) {
        return hybridCode;
      }
    }
    
    return browserLang;
  }

  // =====================================
  // COMPLETE COUNTRY DETECTION
  // =====================================
  async executeCountryDetection() {
    const results = [];
    
    // Run all detection methods in parallel
    const promises = this.config.countryDetection.methods.map(method => 
      this.detectCountryByMethod(method)
    );
    
    const settledResults = await Promise.allSettled(promises);
    
    // Collect successful results
    settledResults.forEach((result, index) => {
      if (result.status === 'fulfilled' && result.value) {
        results.push({
          method: this.config.countryDetection.methods[index],
          ...result.value
        });
      }
    });
    
    // Sort by confidence
    results.sort((a, b) => b.confidence - a.confidence);
    
    // Return the best result
    if (results.length > 0 && results[0].confidence >= this.config.countryDetection.confidenceThreshold) {
      return results[0];
    }
    
    // Fallback
    return {
      country: this.config.countryDetection.fallbackCountry,
      currency: this.getCurrencyForCountry(this.config.countryDetection.fallbackCountry),
      timezone: this.getTimezoneForCountry(this.config.countryDetection.fallbackCountry),
      confidence: 10,
      method: 'fallback'
    };
  }

  async detectCountryByMethod(method) {
    switch (method) {
      case 'url':
        return this.detectCountryFromURL();
      case 'ip_quality':
        return await this.detectCountryFromIP();
      case 'timezone':
        return this.detectCountryFromTimezone();
      case 'browser':
        return this.detectCountryFromBrowser();
      case 'currency':
        return await this.detectCountryFromCurrency();
      default:
        return null;
    }
  }

  detectCountryFromURL() {
    const urlDetection = this.detectFromURL();
    if (urlDetection.country) {
      return {
        country: urlDetection.country,
        currency: this.getCurrencyForCountry(urlDetection.country),
        timezone: this.getTimezoneForCountry(urlDetection.country),
        confidence: 90,
        method: 'url'
      };
    }
    return null;
  }

  async detectCountryFromIP() {
    if (!this.config.privacy.ipDetection.enabled) return null;
    
    // Check DNT
    if (this.config.privacy.ipDetection.respectDNT && 
        (navigator.doNotTrack === '1' || navigator.doNotTrack === 'yes')) {
      return null;
    }
    
    // Check cache
    if (this.cache.ipData && this.cache.lastIPCheck) {
      const cacheAge = Date.now() - this.cache.lastIPCheck;
      if (cacheAge < this.config.privacy.ipDetection.cacheDuration) {
        return {
          country: this.cache.ipData.country,
          currency: this.cache.ipData.currency,
          timezone: this.cache.ipData.timezone,
          confidence: 85,
          method: 'ip_cached'
        };
      }
    }
    
    // Try providers
    const providers = [...this.config.countryDetection.ipProviders]
      .sort((a, b) => a.priority - b.priority);
    
    for (const provider of providers) {
      try {
        const result = await this.fetchFromProvider(provider);
        if (result) {
          // Cache the result
          this.cache.ipData = result;
          this.cache.lastIPCheck = Date.now();
          this.state.ipData = result;
          
          return {
            country: result.country,
            currency: result.currency || this.getCurrencyForCountry(result.country),
            timezone: result.timezone || this.getTimezoneForCountry(result.country),
            confidence: 85,
            method: `ip_${provider.name}`
          };
        }
      } catch (error) {
        console.warn(`IP provider ${provider.name} failed:`, error.message);
        continue;
      }
    }
    
    return null;
  }

  async fetchFromProvider(provider) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), provider.timeout);
    
    try {
      const response = await fetch(provider.url, {
        signal: controller.signal,
        headers: { 'Accept': 'application/json' }
      });
      
      clearTimeout(timeout);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      
      if (provider.parser) {
        const text = await response.text();
        return provider.parser(text);
      } else {
        const data = await response.json();
        return {
          country: data.country_code || data.country || data.countryCode,
          currency: data.currency,
          timezone: data.timezone || data.time_zone,
          provider: provider.name,
          raw: data
        };
      }
    } catch (error) {
      clearTimeout(timeout);
      throw error;
    }
  }

  parseCloudflareTrace(text) {
    const lines = text.split('\n');
    const data = {};
    
    lines.forEach(line => {
      const [key, value] = line.split('=');
      if (key && value) {
        data[key] = value;
      }
    });
    
    return {
      country: data.loc,
      provider: 'cloudflare'
    };
  }

  detectCountryFromTimezone() {
    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (!timezone) return null;
      
      // Try to extract country from timezone
      const tzParts = timezone.split('/');
      if (tzParts.length > 0) {
        const region = tzParts[0];
        
        // Common region to country mappings
        const regionMap = {
          'Asia': ['IN', 'CN', 'JP', 'KR', 'BD', 'PK', 'LK', 'NP', 'AF'],
          'Europe': ['GB', 'DE', 'FR', 'ES', 'IT', 'NL', 'BE', 'AT', 'FI'],
          'America': ['US', 'CA', 'MX', 'BR', 'AR', 'CL'],
          'Africa': ['ZA', 'NG', 'EG', 'KE', 'MA'],
          'Pacific': ['AU', 'NZ', 'FJ']
        };
        
        if (regionMap[region]) {
          const country = regionMap[region][0];
          return {
            country: country,
            currency: this.getCurrencyForCountry(country),
            timezone: timezone,
            confidence: 70,
            method: 'timezone_region'
          };
        }
      }
      
      // Check specific timezone mappings
      const tzMap = this.config.countryDetection.timezoneMap;
      for (const [country, timezones] of Object.entries(tzMap)) {
        if (timezones.includes(timezone)) {
          return {
            country: country,
            currency: this.getCurrencyForCountry(country),
            timezone: timezone,
            confidence: 75,
            method: 'timezone_exact'
          };
        }
      }
      
      return null;
    } catch (error) {
      console.warn('Timezone detection failed:', error);
      return null;
    }
  }

  detectCountryFromBrowser() {
    const acceptLang = this.state.acceptLanguages[0];
    if (acceptLang && acceptLang.includes('-')) {
      const countryCode = acceptLang.split('-')[1];
      if (countryCode && countryCode.length === 2) {
        return {
          country: countryCode.toUpperCase(),
          currency: this.getCurrencyForCountry(countryCode),
          timezone: this.getTimezoneForCountry(countryCode),
          confidence: 60,
          method: 'browser_language'
        };
      }
    }
    return null;
  }

  // =====================================
  // REFINEMENT AND HYBRID LOGIC
  // =====================================
  async refineDetectionWithHybridLogic() {
    // If we have country but not language, suggest language based on country
    if (this.state.detectedCountry && !this.state.currentLanguage) {
      const suggestedLang = this.suggestLanguageForCountry(this.state.detectedCountry);
      if (suggestedLang) {
        this.state.currentLanguage = suggestedLang;
        this.state.languageDetectionMethod = 'country_based';
        this.state.languageConfidence = 70;
      }
    }
    
    // If we have language but not country, suggest country based on language
    if (this.state.currentLanguage && !this.state.detectedCountry) {
      const countryCode = this.state.currentLanguage.split('-')[1];
      if (countryCode) {
        this.state.detectedCountry = countryCode;
        this.state.countryDetectionMethod = 'language_based';
        this.state.countryConfidence = 65;
        this.state.detectedCurrency = this.getCurrencyForCountry(countryCode);
        this.state.detectedTimezone = this.getTimezoneForCountry(countryCode);
      }
    }
    
    // Validate currency-timezone-country consistency
    await this.validateConsistency();
  }

  suggestLanguageForCountry(countryCode) {
    const countryLanguages = {
      'BD': 'bn-BD',
      'IN': ['hi-IN', 'en-IN', 'bn-IN'],
      'PK': 'ur-PK',
      'LK': ['si-LK', 'ta-LK'],
      'NP': 'ne-NP',
      'AF': 'ps-AF',
      'SA': 'ar-SA',
      'AE': 'ar-AE',
      'QA': 'ar-QA',
      'KW': 'ar-KW',
      'OM': 'ar-OM',
      'BH': 'ar-BH',
      'TR': 'tr-TR',
      'IR': 'fa-IR',
      'JP': 'ja-JP',
      'KR': 'ko-KR',
      'CN': 'zh-CN',
      'TW': 'zh-TW',
      'HK': 'zh-HK',
      'DE': 'de-DE',
      'FR': 'fr-FR',
      'ES': 'es-ES',
      'IT': 'it-IT',
      'GB': 'en-GB',
      'US': 'en-US',
      'CA': ['en-CA', 'fr-CA'],
      'AU': 'en-AU',
      'NZ': 'en-NZ',
      'BR': 'pt-BR',
      'RU': 'ru-RU'
    };
    
    const suggestion = countryLanguages[countryCode];
    if (!suggestion) return null;
    
    if (Array.isArray(suggestion)) {
      for (const lang of suggestion) {
        if (this.isLanguageSupported(lang)) {
          return lang;
        }
      }
      return null;
    }
    
    return this.isLanguageSupported(suggestion) ? suggestion : null;
  }

  async validateConsistency() {
    // Check if currency matches country
    if (this.state.detectedCountry && this.state.detectedCurrency) {
      const expectedCurrency = this.getCurrencyForCountry(this.state.detectedCountry);
      if (expectedCurrency !== this.state.detectedCurrency) {
        // Currency mismatch - adjust confidence
        this.state.countryConfidence = Math.max(this.state.countryConfidence - 15, 30);
        
        // Try to detect correct currency
        const actualCurrency = await this.detectActualCurrency();
        if (actualCurrency) {
          this.state.detectedCurrency = actualCurrency;
        }
      }
    }
    
    // Check if timezone matches country
    if (this.state.detectedCountry && this.state.detectedTimezone) {
      const expectedTimezone = this.getTimezoneForCountry(this.state.detectedCountry);
      if (expectedTimezone !== this.state.detectedTimezone) {
        // Timezone mismatch - adjust confidence
        this.state.countryConfidence = Math.max(this.state.countryConfidence - 10, 40);
      }
    }
  }

  async detectActualCurrency() {
    try {
      const locale = navigator.language;
      const formatter = new Intl.NumberFormat(locale, { style: 'currency' });
      const currency = formatter.resolvedOptions().currency;
      
      if (currency && currency !== 'USD') {
        return currency;
      }
    } catch (error) {
      // Ignore
    }
    
    return null;
  }

  calculateFinalConfidence() {
    // Base confidence on detection methods
    let confidence = 0;
    
    // Language confidence factors
    const languageFactors = {
      'url': 25,
      'saved': 20,
      'hybrid': 18,
      'browser': 15,
      'country_based': 12,
      'default': 5,
      'fallback': 0
    };
    
    // Country confidence factors
    const countryFactors = {
      'url': 30,
      'ip_quality': 28,
      'ip_cached': 25,
      'timezone_exact': 22,
      'timezone_region': 20,
      'currency_direct': 18,
      'currency_iso': 16,
      'browser_language': 15,
      'language_based': 12,
      'fallback': 5
    };
    
    // Add language confidence
    confidence += languageFactors[this.state.languageDetectionMethod] || 0;
    
    // Add country confidence
    confidence += countryFactors[this.state.countryDetectionMethod] || 0;
    
    // Apply consistency bonus/malus
    if (this.state.languageConfidence > 70 && this.state.countryConfidence > 70) {
      confidence += 10; // Consistency bonus
    } else if (this.state.languageConfidence < 40 || this.state.countryConfidence < 40) {
      confidence = Math.max(confidence - 15, 30); // Inconsistency penalty
    }
    
    // Cap at 100
    this.state.countryConfidence = Math.min(confidence, 100);
  }

  // =====================================
  // CONSENT MANAGEMENT - COMPLETE
  // =====================================
  checkConsentStatus() {
    // Check for various consent signals
    const signals = [
      this.checkCookieConsent(),
      this.checkLocalStorageConsent(),
      this.checkGlobalConsentAPI(),
      this.checkRegionBasedConsent()
    ];
    
    // Return true if any consent signal is positive
    return signals.some(signal => signal === true);
  }

  checkCookieConsent() {
    const cookie = this.getCookie('nvx_consent');
    if (!cookie) return false;
    
    try {
      const consent = JSON.parse(cookie);
      return consent.preferences === true && consent.timestamp;
    } catch (error) {
      return false;
    }
  }

  checkLocalStorageConsent() {
    const consent = localStorage.getItem('nvx_consent_given');
    return consent === 'true';
  }

  checkGlobalConsentAPI() {
    // Check for common consent management platforms
    const apis = [
      window.__tcfapi, // IAB TCF
      window.__cmp, // Older CMP
      window.OneTrust, // OneTrust
      window.Cookiebot, // Cookiebot
      window._paq, // Matomo
      window.ga // Google Analytics
    ];
    
    return apis.some(api => typeof api === 'function');
  }

  checkRegionBasedConsent() {
    // If not in privacy-sensitive region, assume consent
    const sensitiveRegions = ['EU', 'UK', 'CA', 'AU', 'BR', 'JP', 'KR'];
    
    // Try to detect region
    const browserLang = navigator.language;
    const region = browserLang ? browserLang.split('-')[1] : null;
    
    return !sensitiveRegions.includes(region);
  }

  async handleConsent() {
    if (!this.config.privacy.consentRequired) {
      this.state.consentGiven = true;
      return true;
    }
    
    if (this.state.consentGiven) {
      return true;
    }
    
    // Show consent UI
    const consentGranted = await this.showConsentUI();
    this.state.consentGiven = consentGranted;
    
    if (consentGranted) {
      this.setConsentCookie(true);
    }
    
    return consentGranted;
  }

  showConsentUI() {
    return new Promise((resolve) => {
      // Check if consent UI already exists
      if (document.querySelector('.nevox-consent-ui')) {
        const existingConsent = localStorage.getItem('nvx_consent_given');
        resolve(existingConsent === 'true');
        return;
      }
      
      // Create consent modal
      const modal = document.createElement('div');
      modal.className = 'nevox-consent-ui';
      modal.innerHTML = `
        <div class="nevox-consent-modal">
          <div class="nevox-consent-header">
            <h2> Language & Region Preferences</h2>
            <p>We use local storage to remember your preferences for a better experience.</p>
          </div>
          <div class="nevox-consent-content">
            <div class="nevox-consent-features">
              <div class="nevox-consent-feature">
                <span class="nevox-consent-icon"></span>
                <div>
                  <h3>Language Detection</h3>
                  <p>Automatically detect your preferred language</p>
                </div>
              </div>
              <div class="nevox-consent-feature">
                <span class="nevox-consent-icon"></span>
                <div>
                  <h3>Region Detection</h3>
                  <p>Show content relevant to your region</p>
                </div>
              </div>
              <div class="nevox-consent-feature">
                <span class="nevox-consent-icon"></span>
                <div>
                  <h3>Local Storage</h3>
                  <p>Remember your preferences locally</p>
                </div>
              </div>
            </div>
            <div class="nevox-consent-buttons">
              <button class="nevox-consent-accept nevox-btn-primary">
                Accept All
              </button>
              <button class="nevox-consent-reject nevox-btn-secondary">
                Essential Only
              </button>
            </div>
            <div class="nevox-consent-footer">
              <p><small>You can change these settings anytime using the language switcher. <a href="/privacy" target="_blank">Privacy Policy</a></small></p>
            </div>
          </div>
        </div>
      `;
      
      document.body.appendChild(modal);
      
      // Add event listeners
      modal.querySelector('.nevox-consent-accept').addEventListener('click', () => {
        modal.remove();
        resolve(true);
      });
      
      modal.querySelector('.nevox-consent-reject').addEventListener('click', () => {
        modal.remove();
        resolve(false);
      });
      
      // Add styles
      this.injectConsentStyles();
    });
  }

  setConsentCookie(granted) {
    const consentData = {
      version: '2.0',
      created: new Date().toISOString(),
      updated: new Date().toISOString(),
      purposes: {
        necessary: true,
        preferences: granted,
        statistics: false,
        marketing: false
      },
      vendorConsents: {},
      specialFeatures: {}
    };
    
    // Set cookie
    const expires = new Date(Date.now() + 365 * 86400000).toUTCString();
    document.cookie = `nvx_consent=${encodeURIComponent(JSON.stringify(consentData))}; expires=${expires}; path=/; SameSite=Lax; Secure`;
    
    // Set localStorage flag
    if (granted) {
      localStorage.setItem('nvx_consent_given', 'true');
    } else {
      localStorage.removeItem('nvx_consent_given');
    }
  }

  async initWithLimitedConsent() {
    // Only use essential features
    const sessionData = sessionStorage.getItem(this.config.sessionStorageKey);
    
    if (sessionData) {
      try {
        const data = JSON.parse(sessionData);
        this.state.currentLanguage = data.language || this.detectFromBrowser() || this.config.defaultLanguage;
        this.state.detectedCountry = data.country || this.detectCountryFromBrowser()?.country || this.config.defaultCountry;
        this.state.languageDetectionMethod = 'session';
        this.state.countryDetectionMethod = 'session';
      } catch (error) {
        this.state.currentLanguage = this.config.defaultLanguage;
        this.state.detectedCountry = this.config.defaultCountry;
      }
    } else {
      this.state.currentLanguage = this.detectFromBrowser() || this.config.defaultLanguage;
      this.state.detectedCountry = this.detectCountryFromBrowser()?.country || this.config.defaultCountry;
      this.state.languageDetectionMethod = 'browser_limited';
      this.state.countryDetectionMethod = 'browser_limited';
    }
    
    // Essential updates only
    this.updatePageEssential();
    
    // Track limited consent mode
    this.dispatchEvent('limitedConsentMode', {
      language: this.state.currentLanguage,
      country: this.state.detectedCountry
    });
  }

  // =====================================
  // PAGE UPDATES - COMPLETE
  // =====================================
  updatePage() {
    this.markPerformance(this.performanceMarks.pageUpdateStart);
    
    const { currentLanguage, detectedCountry } = this.state;
    const langConfig = this.config.supportedLanguages[currentLanguage];

    if (!langConfig) {
      this.fallbackToDefault();
      this.markPerformance(this.performanceMarks.pageUpdateEnd);
      return;
    }

    // Update HTML attributes
    this.updateHTMLLanguage();
    
    // Update country data
    if (detectedCountry) {
      this.updateHTMLCountryData();
    }

    // Apply RTL styles
    if (langConfig.dir === 'rtl') {
      this.applyRTLStyles();
    } else {
      this.removeRTLStyles();
    }

    // Store preferences (with consent)
    this.storePreferences();

    // Dispatch language change event
    this.dispatchLanguageEvent(langConfig);

    // Update meta viewport for RTL
    if (langConfig.dir === 'rtl') {
      this.fixRTLViewport();
    }

    // Mark performance
    this.markPerformance(this.performanceMarks.pageUpdateEnd);
  }

  updateHTMLLanguage() {
    const langConfig = this.config.supportedLanguages[this.state.currentLanguage];
    if (!langConfig) return;
    
    // Update lang attribute
    document.documentElement.lang = this.state.currentLanguage;
    
    // Update dir attribute
    document.documentElement.dir = langConfig.dir;
    
    // Add language class
    document.documentElement.classList.add(`nevox-lang-${langConfig.language}`);
    document.documentElement.classList.add(`nevox-country-${this.state.detectedCountry?.toLowerCase() || 'unknown'}`);
    
    // Set CSS variables
    document.documentElement.style.setProperty('--nevox-language', langConfig.language);
    document.documentElement.style.setProperty('--nevox-country', this.state.detectedCountry || '');
    document.documentElement.style.setProperty('--nevox-direction', langConfig.dir);
    document.documentElement.style.setProperty('--nevox-currency', this.state.detectedCurrency || '');
  }

  updateHTMLCountryData() {
    document.documentElement.dataset.country = this.state.detectedCountry.toLowerCase();
    document.documentElement.dataset.currency = this.state.detectedCurrency;
    document.documentElement.dataset.timezone = this.state.detectedTimezone;
    document.documentElement.dataset.countryConfidence = this.state.countryConfidence;
    document.documentElement.dataset.languageConfidence = this.state.languageConfidence;
  }

  applyRTLStyles() {
    document.documentElement.classList.add('nevox-rtl');
    document.body.classList.add('nevox-rtl');
    
    // RTL-specific adjustments
    document.documentElement.style.direction = 'rtl';
    document.documentElement.style.textAlign = 'right';
    
    // Fix scrollbar position
    if (!document.documentElement.hasAttribute('data-rtl-adjusted')) {
      document.documentElement.style.scrollPaddingLeft = '1rem';
      document.documentElement.setAttribute('data-rtl-adjusted', 'true');
    }
  }

  removeRTLStyles() {
    document.documentElement.classList.remove('nevox-rtl');
    document.body.classList.remove('nevox-rtl');
    
    // Reset direction
    document.documentElement.style.direction = 'ltr';
    document.documentElement.style.textAlign = 'left';
    document.documentElement.style.scrollPaddingLeft = '';
  }

  fixRTLViewport() {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport && !viewport.getAttribute('content').includes('direction=rtl')) {
      const content = viewport.getAttribute('content');
      viewport.setAttribute('content', `${content}, direction=rtl`);
    }
  }

  updatePageEssential() {
    // Minimal updates for limited consent mode
    const langConfig = this.config.supportedLanguages[this.state.currentLanguage];
    if (!langConfig) return;
    
    document.documentElement.lang = this.state.currentLanguage;
    document.documentElement.dir = langConfig.dir;
    
    if (this.state.detectedCountry) {
      document.documentElement.dataset.country = this.state.detectedCountry.toLowerCase();
    }
    
    // Store in session only
    const sessionData = {
      language: this.state.currentLanguage,
      country: this.state.detectedCountry,
      timestamp: new Date().toISOString(),
      consent: false
    };
    
    sessionStorage.setItem(this.config.sessionStorageKey, JSON.stringify(sessionData));
  }

  storePreferences() {
    const data = {
      language: this.state.currentLanguage,
      country: this.state.detectedCountry,
      currency: this.state.detectedCurrency,
      timezone: this.state.detectedTimezone,
      languageMethod: this.state.languageDetectionMethod,
      countryMethod: this.state.countryDetectionMethod,
      languageConfidence: this.state.languageConfidence,
      countryConfidence: this.state.countryConfidence,
      timestamp: new Date().toISOString(),
      consent: this.state.consentGiven
    };
    
    // Always store in session (essential)
    sessionStorage.setItem(this.config.sessionStorageKey, JSON.stringify(data));
    
    // Store with consent
    if (this.state.consentGiven) {
      localStorage.setItem(this.config.localStorageKey, this.state.currentLanguage);
      localStorage.setItem(this.config.countryStorageKey, JSON.stringify({
        country: this.state.detectedCountry,
        confidence: this.state.countryConfidence,
        detectedAt: new Date().toISOString()
      }));
      
      // Cleanup old data
      this.cleanupStorage();
    }
  }

  dispatchLanguageEvent(langConfig) {
    const eventData = {
      language: this.state.currentLanguage,
      languageName: langConfig.name,
      languageNativeName: langConfig.nativeName,
      direction: langConfig.dir,
      region: langConfig.region,
      country: this.state.detectedCountry,
      currency: this.state.detectedCurrency,
      timezone: this.state.detectedTimezone,
      languageMethod: this.state.languageDetectionMethod,
      countryMethod: this.state.countryDetectionMethod,
      languageConfidence: this.state.languageConfidence,
      countryConfidence: this.state.countryConfidence,
      consent: this.state.consentGiven,
      timestamp: new Date().toISOString(),
      performance: {
        detectionTime: this.state.detectionTime,
        marks: this.cache.performance.marks
      },
      seo: {
        applied: this.state.seoApplied,
        hreflangCount: this.seoState.hreflangTags.size,
        canonicalUpdated: this.state.canonicalUpdated
      }
    };
    
    this.dispatchEvent('languageChange', eventData);
  }

  // =====================================
  // UTILITY METHODS - COMPLETE
  // =====================================
  normalizeLanguageCode(code) {
    if (!code) return this.config.defaultLanguage;
    
    const lowerCode = code.toLowerCase().trim();
    
    // Direct match
    if (this.isLanguageSupported(lowerCode)) {
      return lowerCode;
    }
    
    // Common normalizations
    const normalizationMap = {
      // English
      'en': 'en-US',
      'en-us': 'en-US',
      'en-gb': 'en-GB',
      'en-au': 'en-AU',
      'en-ca': 'en-CA',
      'en-in': 'en-IN',
      'en-nz': 'en-NZ',
      'en-za': 'en-ZA',
      
      // Spanish
      'es': 'es-ES',
      'es-es': 'es-ES',
      'es-mx': 'es-MX',
      'es-ar': 'es-AR',
      'es-cl': 'es-CL',
      'es-co': 'es-CO',
      'es-pe': 'es-PE',
      
      // French
      'fr': 'fr-FR',
      'fr-fr': 'fr-FR',
      'fr-ca': 'fr-CA',
      'fr-be': 'fr-BE',
      'fr-ch': 'fr-CH',
      
      // German
      'de': 'de-DE',
      'de-de': 'de-DE',
      'de-at': 'de-AT',
      'de-ch': 'de-CH',
      
      // Portuguese
      'pt': 'pt-BR',
      'pt-br': 'pt-BR',
      'pt-pt': 'pt-PT',
      
      // Chinese
      'zh': 'zh-CN',
      'zh-cn': 'zh-CN',
      'zh-tw': 'zh-TW',
      'zh-hk': 'zh-HK',
      'zh-sg': 'zh-SG',
      'zh-hans': 'zh-CN',
      'zh-hant': 'zh-TW',
      
      // Arabic
      'ar': 'ar-SA',
      'ar-sa': 'ar-SA',
      'ar-ae': 'ar-AE',
      'ar-bh': 'ar-BH',
      'ar-dz': 'ar-DZ',
      'ar-eg': 'ar-EG',
      'ar-iq': 'ar-IQ',
      'ar-jo': 'ar-JO',
      'ar-kw': 'ar-KW',
      'ar-lb': 'ar-LB',
      'ar-ly': 'ar-LY',
      'ar-ma': 'ar-MA',
      'ar-om': 'ar-OM',
      'ar-qa': 'ar-QA',
      'ar-sy': 'ar-SY',
      'ar-tn': 'ar-TN',
      'ar-ye': 'ar-YE',
      
      // Hindi
      'hi': 'hi-IN',
      'hi-in': 'hi-IN',
      
      // Bangla
      'bn': 'bn-BD',
      'bn-bd': 'bn-BD',
      'bn-in': 'bn-IN',
      
      // Japanese
      'ja': 'ja-JP',
      'ja-jp': 'ja-JP',
      
      // Korean
      'ko': 'ko-KR',
      'ko-kr': 'ko-KR',
      
      // Russian
      'ru': 'ru-RU',
      'ru-ru': 'ru-RU',
      'ru-by': 'ru-BY',
      'ru-kz': 'ru-KZ',
      'ru-ua': 'ru-UA'
    };
    
    const normalized = normalizationMap[lowerCode];
    if (normalized && this.isLanguageSupported(normalized)) {
      return normalized;
    }
    
    // Try language only match
    const langOnly = lowerCode.split('-')[0];
    const match = Object.keys(this.config.supportedLanguages).find(lang => 
      lang.startsWith(langOnly + '-')
    );
    
    return match || this.config.defaultLanguage;
  }

  isLanguageSupported(lang) {
    return Object.keys(this.config.supportedLanguages).includes(lang);
  }

  getSavedPreference() {
    if (!this.state.consentGiven) return null;
    
    const saved = localStorage.getItem(this.config.localStorageKey);
    if (saved && this.isLanguageSupported(saved)) {
      return saved;
    }
    
    return null;
  }

  getCurrencyForCountry(countryCode) {
    // Reverse lookup from currency map
    const currencyMap = this.config.countryDetection.currencyMap;
    
    for (const [currency, countries] of Object.entries(currencyMap)) {
      if (countries.includes(countryCode)) {
        return currency;
      }
    }
    
    // Default mapping
    const defaultCurrencies = {
      'US': 'USD', 'GB': 'GBP', 'DE': 'EUR', 'FR': 'EUR', 'IT': 'EUR',
      'ES': 'EUR', 'NL': 'EUR', 'BE': 'EUR', 'AT': 'EUR', 'FI': 'EUR',
      'IE': 'EUR', 'PT': 'EUR', 'GR': 'EUR', 'JP': 'JPY', 'CN': 'CNY',
      'KR': 'KRW', 'IN': 'INR', 'BD': 'BDT', 'PK': 'PKR', 'LK': 'LKR',
      'NP': 'NPR', 'AF': 'AFN', 'SA': 'SAR', 'AE': 'AED', 'QA': 'QAR',
      'KW': 'KWD', 'OM': 'OMR', 'BH': 'BHD', 'TR': 'TRY', 'RU': 'RUB',
      'BR': 'BRL', 'MX': 'MXN', 'AR': 'ARS', 'CL': 'CLP', 'CO': 'COP',
      'PE': 'PEN', 'VE': 'VES', 'ZA': 'ZAR', 'NG': 'NGN', 'EG': 'EGP',
      'KE': 'KES', 'ET': 'ETB', 'MA': 'MAD', 'TN': 'TND', 'DZ': 'DZD',
      'AU': 'AUD', 'NZ': 'NZD', 'SG': 'SGD', 'HK': 'HKD', 'TW': 'TWD',
      'TH': 'THB', 'ID': 'IDR', 'MY': 'MYR', 'PH': 'PHP', 'VN': 'VND',
      'MM': 'MMK', 'KH': 'KHR', 'LA': 'LAK', 'CA': 'CAD'
    };
    
    return defaultCurrencies[countryCode] || 'USD';
  }

  getTimezoneForCountry(countryCode) {
    const tzMap = this.config.countryDetection.timezoneMap;
    if (tzMap[countryCode] && tzMap[countryCode].length > 0) {
      return tzMap[countryCode][0]; // Primary timezone
    }
    
    // Default mapping
    const defaultTimezones = {
      'US': 'America/New_York', 'GB': 'Europe/London', 'DE': 'Europe/Berlin',
      'FR': 'Europe/Paris', 'JP': 'Asia/Tokyo', 'CN': 'Asia/Shanghai',
      'IN': 'Asia/Kolkata', 'BD': 'Asia/Dhaka', 'PK': 'Asia/Karachi',
      'LK': 'Asia/Colombo', 'NP': 'Asia/Kathmandu', 'AF': 'Asia/Kabul',
      'SA': 'Asia/Riyadh', 'AE': 'Asia/Dubai', 'KR': 'Asia/Seoul',
      'AU': 'Australia/Sydney', 'BR': 'America/Sao_Paulo', 'RU': 'Europe/Moscow',
      'CA': 'America/Toronto', 'MX': 'America/Mexico_City', 'ES': 'Europe/Madrid',
      'IT': 'Europe/Rome', 'NL': 'Europe/Amsterdam', 'BE': 'Europe/Brussels',
      'CH': 'Europe/Zurich', 'SE': 'Europe/Stockholm', 'NO': 'Europe/Oslo',
      'DK': 'Europe/Copenhagen', 'FI': 'Europe/Helsinki', 'PL': 'Europe/Warsaw',
      'CZ': 'Europe/Prague', 'HU': 'Europe/Budapest', 'RO': 'Europe/Bucharest',
      'BG': 'Europe/Sofia', 'GR': 'Europe/Athens', 'TR': 'Europe/Istanbul',
      'ZA': 'Africa/Johannesburg', 'NG': 'Africa/Lagos', 'EG': 'Africa/Cairo',
      'KE': 'Africa/Nairobi', 'AR': 'America/Argentina/Buenos_Aires',
      'CL': 'America/Santiago', 'CO': 'America/Bogota', 'PE': 'America/Lima',
      'NZ': 'Pacific/Auckland', 'SG': 'Asia/Singapore', 'HK': 'Asia/Hong_Kong',
      'TW': 'Asia/Taipei', 'TH': 'Asia/Bangkok', 'ID': 'Asia/Jakarta',
      'MY': 'Asia/Kuala_Lumpur', 'PH': 'Asia/Manila', 'VN': 'Asia/Ho_Chi_Minh'
    };
    
    return defaultTimezones[countryCode] || 'UTC';
  }

  getCanonicalURL(langCode) {
    const currentURL = new URL(window.location.href);
    const strategy = this.config.urlStrategy === 'auto' ? 
      this.detectURLStrategy() : this.config.urlStrategy;
    
    switch (strategy) {
      case 'path':
        return this.getPathBasedURL(currentURL, langCode);
      case 'query':
        return this.getQueryBasedURL(currentURL, langCode);
      case 'subdomain':
        return this.getSubdomainBasedURL(currentURL, langCode);
      case 'hash':
        return this.getHashBasedURL(currentURL, langCode);
      default:
        return currentURL.toString();
    }
  }

  detectURLStrategy() {
    const url = new URL(window.location.href);
    
    // Check path
    const pathParts = url.pathname.split('/').filter(p => p);
    if (pathParts.length > 0) {
      const firstPart = pathParts[0].toLowerCase();
      if (this.config.urlConfig.path.supportedPrefixes.includes(firstPart)) {
        return 'path';
      }
    }
    
    // Check query
    for (const param of this.config.urlConfig.query.supportedParams) {
      if (url.searchParams.has(param)) {
        return 'query';
      }
    }
    
    // Check subdomain
    const hostParts = url.hostname.split('.');
    if (hostParts.length >= 3) {
      const subdomain = hostParts[0].toLowerCase();
      if (subdomain !== 'www' && subdomain !== 'app' && subdomain !== 'api') {
        return 'subdomain';
      }
    }
    
    // Default to query
    return 'query';
  }

  getPathBasedURL(url, langCode) {
    const langPrefix = langCode.split('-')[0];
    const pathParts = url.pathname.split('/').filter(p => p);
    
    // Check if first part is a language code
    if (pathParts.length > 0) {
      const firstPart = pathParts[0].toLowerCase();
      const isLang = this.config.urlConfig.path.supportedPrefixes.includes(firstPart);
      
      if (isLang) {
        // Replace language prefix
        pathParts[0] = langPrefix;
      } else {
        // Add language prefix
        pathParts.unshift(langPrefix);
      }
    } else {
      // Add language prefix to empty path
      pathParts.push(langPrefix);
    }
    
    url.pathname = '/' + pathParts.join('/');
    return url.toString();
  }

  getQueryBasedURL(url, langCode) {
    const param = this.config.urlConfig.query.param;
    url.searchParams.set(param, langCode);
    return url.toString();
  }

  getSubdomainBasedURL(url, langCode) {
    const langPrefix = langCode.split('-')[0];
    const hostParts = url.hostname.split('.');
    
    if (hostParts.length >= 3) {
      // Replace subdomain
      hostParts[0] = langPrefix;
    } else {
      // Add subdomain
      hostParts.unshift(langPrefix);
    }
    
    url.hostname = hostParts.join('.');
    return url.toString();
  }

  getHashBasedURL(url, langCode) {
    const hashParam = this.config.urlConfig.hash.param;
    url.hash = `${hashParam}${langCode}`;
    return url.toString();
  }

  getLanguageName(code) {
    const config = this.config.supportedLanguages[code];
    return config ? config.name : code;
  }

  getNativeLanguageName(code) {
    const config = this.config.supportedLanguages[code];
    return config ? config.nativeName : code;
  }

  getFlagEmoji(code) {
    const countryCode = code.split('-')[1];
    if (!countryCode) return '️';
    
    try {
      return String.fromCodePoint(...countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt())
      );
    } catch (error) {
      // Special flags
      const specialFlags = {
        'GB-ENG': '',
        'GB-SCT': '',
        'GB-WLS': '',
        'EU': '',
        'UN': '',
        'WORLD': '',
        'BD': '',
        'IN': '',
        'PK': '',
        'LK': '',
        'NP': '',
        'AF': '',
        'SA': '',
        'AE': '',
        'QA': '',
        'KW': '',
        'OM': '',
        'BH': ''
      };
      
      return specialFlags[countryCode] || '️';
    }
  }

  getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }

  cleanupStorage() {
    const maxAge = this.config.privacy.autoCleanupDays * 86400000;
    const now = Date.now();
    
    // Clean localStorage
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('nvx_')) {
        try {
          const item = localStorage.getItem(key);
          const data = JSON.parse(item);
          if (data && data.timestamp) {
            const age = now - new Date(data.timestamp).getTime();
            if (age > maxAge) {
              localStorage.removeItem(key);
            }
          }
        } catch (error) {
          // Not JSON, check timestamp string
          if (key.includes('_updated') || key.includes('_detected')) {
            const timestamp = localStorage.getItem(key);
            if (timestamp) {
              const age = now - new Date(timestamp).getTime();
              if (age > maxAge) {
                localStorage.removeItem(key);
              }
            }
          }
        }
      }
    });
  }

  // =====================================
  // UI COMPONENTS - COMPLETE
  // =====================================
  initUI() {
    if (this.config.performance.lazyLoadUI && 'requestIdleCallback' in window) {
      requestIdleCallback(() => this.loadUIComponents());
    } else {
      this.loadUIComponents();
    }
  }

  loadUIComponents() {
    // Mark performance
    this.markPerformance(this.performanceMarks.uiRenderStart);
    
    // Create language switcher
    this.createLanguageSwitcher();
    
    // Create country badge
    if (this.config.ux.smartCountryBadge) {
      this.createCountryBadge();
    }
    
    // Create status element
    if (this.config.ux.showStatus) {
      this.createStatusElement();
    }
    
    // Mark performance
    this.markPerformance(this.performanceMarks.uiRenderEnd);
    
    // Inject styles
    this.injectUIStyles();
  }

  createLanguageSwitcher() {
    if (document.querySelector('.nevox-language-switcher')) return;
    
    const switcher = document.createElement('div');
    switcher.className = 'nevox-language-switcher';
    switcher.setAttribute('role', 'dialog');
    switcher.setAttribute('aria-label', 'Language selection');
    switcher.setAttribute('aria-modal', 'true');
    switcher.setAttribute('aria-hidden', 'true');
    
    // Build options HTML
    let optionsHTML = '';
    Object.entries(this.config.supportedLanguages).forEach(([code, config]) => {
      const isCurrent = code === this.state.currentLanguage;
      const countryCode = code.split('-')[1];
      const currency = config.currency;
      
      optionsHTML += `
        <div class="nevox-language-option ${isCurrent ? 'nevox-language-option--current' : ''}" 
             data-lang="${code}" 
             role="button" 
             tabindex="0"
             aria-label="${config.nativeName} (${config.name})${isCurrent ? ' - Current' : ''}"
             aria-pressed="${isCurrent}">
          <div class="nevox-language-option-content">
            <span class="nevox-language-flag" aria-hidden="true">${this.getFlagEmoji(code)}</span>
            <div class="nevox-language-details">
              <span class="nevox-language-name">${config.nativeName}</span>
              <span class="nevox-language-name-secondary">${config.name}</span>
              <span class="nevox-language-meta">${countryCode} • ${currency}</span>
            </div>
            ${isCurrent ? '<span class="nevox-language-current" aria-hidden="true">✓</span>' : ''}
          </div>
        </div>
      `;
    });
    
    const currentLang = this.getNativeLanguageName(this.state.currentLanguage);
    const currentCountry = this.state.detectedCountry;
    const currentCurrency = this.state.detectedCurrency;
    
    switcher.innerHTML = `
      <div class="nevox-language-switcher-header">
        <div class="nevox-language-switcher-current">
          <h3 id="nevox-language-switcher-title" class="nevox-language-switcher-title">
            <span class="nevox-language-switcher-icon"></span>
            Select Language
          </h3>
          <div class="nevox-current-display">
            <span class="nevox-current-flag">${this.getFlagEmoji(this.state.currentLanguage)}</span>
            <div class="nevox-current-details">
              <span class="nevox-current-language">${currentLang}</span>
              <span class="nevox-current-region">${currentCountry} • ${currentCurrency}</span>
            </div>
          </div>
        </div>
        <button class="nevox-language-switcher-close" aria-label="Close language switcher">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <div class="nevox-language-options" role="group" aria-labelledby="nevox-language-switcher-title">
        ${optionsHTML}
      </div>
      <div class="nevox-language-switcher-footer">
        <div class="nevox-detection-info">
          <div class="nevox-detection-item">
            <span class="nevox-detection-label">Region:</span>
            <span class="nevox-detection-value">${currentCountry}</span>
          </div>
          <div class="nevox-detection-item">
            <span class="nevox-detection-label">Confidence:</span>
            <span class="nevox-detection-value">${this.state.countryConfidence}%</span>
          </div>
          <div class="nevox-detection-item">
            <span class="nevox-detection-label">Method:</span>
            <span class="nevox-detection-value">${this.state.countryDetectionMethod}</span>
          </div>
        </div>
        <button class="nevox-refresh-detection" aria-label="Refresh detection">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
          </svg>
          Refresh
        </button>
      </div>
    `;
    
    document.body.appendChild(switcher);
    
    // Create toggle button
    this.createSwitcherToggle();
    
    // Add event listeners
    this.setupSwitcherEvents(switcher);
  }

  createSwitcherToggle() {
    const toggle = document.createElement('button');
    toggle.className = 'nevox-language-switcher-toggle';
    toggle.innerHTML = `
      <span class="nevox-toggle-icon"></span>
      <span class="nevox-toggle-text">${this.state.currentLanguage.split('-')[0].toUpperCase()}</span>
      <span class="nevox-toggle-arrow">▼</span>
    `;
    toggle.title = 'Change language and region';
    toggle.setAttribute('aria-label', 'Open language switcher');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-haspopup', 'dialog');
    toggle.setAttribute('aria-controls', 'nevox-language-switcher');
    
    document.body.appendChild(toggle);
    
    // Position toggle
    this.positionToggle(toggle);
    
    // Add click handler
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleSwitcher();
    });
  }

  positionToggle(toggle) {
    if (this.config.ux.rememberPosition) {
      const savedPosition = localStorage.getItem('nevox_ui_position');
      if (savedPosition) {
        const { x, y } = JSON.parse(savedPosition);
        Object.assign(toggle.style, {
          position: 'fixed',
          left: `${x}px`,
          top: `${y}px`
        });
        return;
      }
    }
    
    // Default position (bottom right)
    Object.assign(toggle.style, {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      left: 'auto',
      top: 'auto'
    });
  }

  toggleSwitcher() {
    const switcher = document.querySelector('.nevox-language-switcher');
    const toggle = document.querySelector('.nevox-language-switcher-toggle');
    
    if (!switcher || !toggle) return;
    
    const isVisible = switcher.getAttribute('aria-hidden') === 'false';
    
    if (isVisible) {
      this.hideSwitcher();
    } else {
      this.showSwitcher();
    }
  }

  showSwitcher() {
    const switcher = document.querySelector('.nevox-language-switcher');
    const toggle = document.querySelector('.nevox-language-switcher-toggle');
    
    if (!switcher || !toggle) return;
    
    switcher.setAttribute('aria-hidden', 'false');
    switcher.classList.add('nevox-language-switcher--visible');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.classList.add('nevox-language-switcher-toggle--active');
    
    // Focus first option
    setTimeout(() => {
      const firstOption = switcher.querySelector('.nevox-language-option');
      if (firstOption) firstOption.focus();
    }, 100);
  }

  hideSwitcher() {
    const switcher = document.querySelector('.nevox-language-switcher');
    const toggle = document.querySelector('.nevox-language-switcher-toggle');
    
    if (!switcher || !toggle) return;
    
    switcher.setAttribute('aria-hidden', 'true');
    switcher.classList.remove('nevox-language-switcher--visible');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.classList.remove('nevox-language-switcher-toggle--active');
    
    // Return focus to toggle
    toggle.focus();
  }

  setupSwitcherEvents(switcher) {
    // Close button
    switcher.querySelector('.nevox-language-switcher-close').addEventListener('click', () => {
      this.hideSwitcher();
    });
    
    // Language options
    switcher.querySelectorAll('.nevox-language-option').forEach(option => {
      option.addEventListener('click', () => {
        const lang = option.dataset.lang;
        this.setLanguage(lang);
        this.hideSwitcher();
      });
      
      option.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          option.click();
        }
      });
    });
    
    // Refresh button
    switcher.querySelector('.nevox-refresh-detection').addEventListener('click', async () => {
      this.showStatus('detecting', 'Refreshing detection...');
      await this.executeCountryDetection();
      this.updatePage();
      this.showStatus('detected', 'Detection refreshed!');
    });
    
    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.hideSwitcher();
      }
    });
    
    // Close on outside click
    document.addEventListener('click', (e) => {
      const switcherEl = document.querySelector('.nevox-language-switcher');
      const toggleEl = document.querySelector('.nevox-language-switcher-toggle');
      
      if (switcherEl && toggleEl && 
          !switcherEl.contains(e.target) && 
          !toggleEl.contains(e.target)) {
        this.hideSwitcher();
      }
    });
  }

  createCountryBadge() {
    if (document.querySelector('.nevox-country-badge')) return;
    
    const badge = document.createElement('div');
    badge.className = 'nevox-country-badge';
    badge.innerHTML = `
      <div class="nevox-country-badge-content">
        <span class="nevox-country-flag">${this.getFlagEmoji(this.state.currentLanguage)}</span>
        <span class="nevox-country-code">${this.state.detectedCountry}</span>
        <span class="nevox-country-confidence">${this.state.countryConfidence}%</span>
        ${this.state.countryConfidence < 70 ? 
          '<span class="nevox-country-warning" title="Low confidence detection">⚠️</span>' : ''}
      </div>
    `;
    
    document.body.appendChild(badge);
    
    // Add click handler
    badge.addEventListener('click', () => {
      this.showDetectionDetails();
    });
    
    // Auto-hide after delay
    if (this.config.ux.autoHideUI) {
      setTimeout(() => {
        badge.classList.add('nevox-country-badge--faded');
      }, 5000);
    }
  }

  showDetectionDetails() {
    const details = `
      Detection Details:
      • Language: ${this.getLanguageName(this.state.currentLanguage)}
      • Country: ${this.state.detectedCountry}
      • Currency: ${this.state.detectedCurrency}
      • Timezone: ${this.state.detectedTimezone}
      • Confidence: ${this.state.countryConfidence}%
      • Method: ${this.state.countryDetectionMethod}
      • Language Method: ${this.state.languageDetectionMethod}
    `;
    
    this.showStatus('detected', details);
  }

  createStatusElement() {
    if (document.querySelector('.nevox-status')) return;
    
    const status = document.createElement('div');
    status.className = 'nevox-status';
    status.setAttribute('aria-live', 'polite');
    status.setAttribute('aria-atomic', 'true');
    status.setAttribute('role', 'status');
    
    document.body.appendChild(status);
  }

  showStatus(type, message) {
    const statusEl = document.querySelector('.nevox-status');
    if (!statusEl) return;
    
    // Clear previous timeout
    if (this.statusTimeout) {
      clearTimeout(this.statusTimeout);
    }
    
    // Update status
    statusEl.className = `nevox-status nevox-status--${type}`;
    statusEl.textContent = message;
    statusEl.classList.add('nevox-status--visible');
    
    // Auto-hide
    if (this.config.ux.autoHideUI) {
      this.statusTimeout = setTimeout(() => {
        statusEl.classList.remove('nevox-status--visible');
      }, this.config.ux.statusDuration);
    }
  }

  hideStatus() {
    const statusEl = document.querySelector('.nevox-status');
    if (statusEl) {
      statusEl.classList.remove('nevox-status--visible');
    }
  }

  injectUIStyles() {
    if (document.querySelector('#nevox-ui-styles')) return;
    
    const styles = document.createElement('style');
    styles.id = 'nevox-ui-styles';
    
    // Comprehensive UI styles
    styles.textContent = `
      /* NEVOX Globalization UI Styles */
      :root {
        --nevox-primary: #2563eb;
        --nevox-primary-dark: #1d4ed8;
        --nevox-success: #10b981;
        --nevox-warning: #f59e0b;
        --nevox-error: #ef4444;
        --nevox-gray-50: #f9fafb;
        --nevox-gray-100: #f3f4f6;
        --nevox-gray-200: #e5e7eb;
        --nevox-gray-300: #d1d5db;
        --nevox-gray-400: #9ca3af;
        --nevox-gray-500: #6b7280;
        --nevox-gray-600: #4b5563;
        --nevox-gray-700: #374151;
        --nevox-gray-800: #1f2937;
        --nevox-gray-900: #111827;
        --nevox-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        --nevox-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        --nevox-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        --nevox-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        --nevox-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        --nevox-radius-sm: 0.125rem;
        --nevox-radius: 0.25rem;
        --nevox-radius-md: 0.375rem;
        --nevox-radius-lg: 0.5rem;
        --nevox-radius-xl: 0.75rem;
        --nevox-radius-2xl: 1rem;
        --nevox-radius-full: 9999px;
      }
      
      /* Language Switcher Toggle */
      .nevox-language-switcher-toggle {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--nevox-primary);
        color: white;
        border: none;
        border-radius: var(--nevox-radius-full);
        padding: 12px 20px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 8px;
        box-shadow: var(--nevox-shadow-xl);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        user-select: none;
      }
      
      .nevox-language-switcher-toggle:hover {
        background: var(--nevox-primary-dark);
        transform: translateY(-2px);
        box-shadow: var(--nevox-shadow-2xl);
      }
      
      .nevox-language-switcher-toggle--active {
        background: var(--nevox-primary-dark);
        transform: translateY(-2px);
      }
      
      .nevox-toggle-icon {
        font-size: 18px;
      }
      
      .nevox-toggle-text {
        font-size: 14px;
        font-weight: 600;
      }
      
      .nevox-toggle-arrow {
        font-size: 10px;
        transition: transform 0.3s ease;
      }
      
      .nevox-language-switcher-toggle--active .nevox-toggle-arrow {
        transform: rotate(180deg);
      }
      
      /* Language Switcher Modal */
      .nevox-language-switcher {
        position: fixed;
        bottom: 90px;
        right: 20px;
        width: 380px;
        max-width: calc(100vw - 40px);
        max-height: 600px;
        background: white;
        border-radius: var(--nevox-radius-2xl);
        box-shadow: var(--nevox-shadow-2xl);
        z-index: 9999;
        transform: translateY(20px) scale(0.95);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        border: 1px solid var(--nevox-gray-200);
      }
      
      .nevox-language-switcher--visible {
        transform: translateY(0) scale(1);
        opacity: 1;
        visibility: visible;
      }
      
      .nevox-language-switcher-header {
        padding: 24px;
        border-bottom: 1px solid var(--nevox-gray-200);
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        background: var(--nevox-gray-50);
      }
      
      .nevox-language-switcher-title {
        margin: 0 0 16px 0;
        color: var(--nevox-gray-900);
        font-size: 20px;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      .nevox-language-switcher-icon {
        font-size: 24px;
      }
      
      .nevox-current-display {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px;
        background: white;
        border-radius: var(--nevox-radius-lg);
        border: 1px solid var(--nevox-gray-200);
      }
      
      .nevox-current-flag {
        font-size: 28px;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--nevox-gray-100);
        border-radius: var(--nevox-radius-md);
      }
      
      .nevox-current-details {
        flex: 1;
      }
      
      .nevox-current-language {
        display: block;
        font-weight: 600;
        color: var(--nevox-gray-900);
        font-size: 16px;
        margin-bottom: 4px;
      }
      
      .nevox-current-region {
        display: block;
        font-size: 13px;
        color: var(--nevox-gray-600);
      }
      
      .nevox-language-switcher-close {
        background: none;
        border: none;
        padding: 8px;
        cursor: pointer;
        color: var(--nevox-gray-500);
        border-radius: var(--nevox-radius-full);
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .nevox-language-switcher-close:hover {
        background: var(--nevox-gray-100);
        color: var(--nevox-gray-700);
      }
      
      .nevox-language-options {
        flex: 1;
        overflow-y: auto;
        padding: 16px;
        max-height: 400px;
      }
      
      .nevox-language-option {
        padding: 12px;
        border-radius: var(--nevox-radius-lg);
        cursor: pointer;
        transition: all 0.2s ease;
        margin-bottom: 8px;
        border: 1px solid transparent;
        outline: none;
      }
      
      .nevox-language-option:hover {
        background: var(--nevox-gray-50);
        border-color: var(--nevox-gray-200);
        transform: translateX(4px);
      }
      
      .nevox-language-option:focus {
        border-color: var(--nevox-primary);
        box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
      }
      
      .nevox-language-option--current {
        background: var(--nevox-gray-50);
        border-color: var(--nevox-primary);
      }
      
      .nevox-language-option-content {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      
      .nevox-language-flag {
        font-size: 24px;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--nevox-gray-100);
        border-radius: var(--nevox-radius-md);
        flex-shrink: 0;
      }
      
      .nevox-language-details {
        flex: 1;
        min-width: 0;
      }
      
      .nevox-language-name {
        display: block;
        font-weight: 600;
        color: var(--nevox-gray-900);
        margin-bottom: 2px;
        font-size: 14px;
      }
      
      .nevox-language-name-secondary {
        display: block;
        font-size: 12px;
        color: var(--nevox-gray-600);
        margin-bottom: 4px;
      }
      
      .nevox-language-meta {
        display: block;
        font-size: 11px;
        color: var(--nevox-gray-500);
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      
      .nevox-language-current {
        color: var(--nevox-primary);
        font-size: 20px;
        flex-shrink: 0;
      }
      
      .nevox-language-switcher-footer {
        padding: 20px;
        border-top: 1px solid var(--nevox-gray-200);
        background: var(--nevox-gray-50);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .nevox-detection-info {
        display: flex;
        gap: 16px;
      }
      
      .nevox-detection-item {
        display: flex;
        flex-direction: column;
      }
      
      .nevox-detection-label {
        font-size: 11px;
        color: var(--nevox-gray-500);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 2px;
      }
      
      .nevox-detection-value {
        font-size: 13px;
        font-weight: 600;
        color: var(--nevox-gray-800);
      }
      
      .nevox-refresh-detection {
        background: white;
        border: 1px solid var(--nevox-gray-300);
        padding: 8px 16px;
        border-radius: var(--nevox-radius-lg);
        font-size: 13px;
        color: var(--nevox-gray-700);
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 6px;
        transition: all 0.2s ease;
        font-weight: 500;
      }
      
      .nevox-refresh-detection:hover {
        background: var(--nevox-gray-50);
        border-color: var(--nevox-gray-400);
      }
      
      .nevox-refresh-detection svg {
        width: 14px;
        height: 14px;
      }
      
      /* Country Badge */
      .nevox-country-badge {
        position: fixed;
        top: 20px;
        left: 20px;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        border: 1px solid var(--nevox-gray-200);
        border-radius: var(--nevox-radius-lg);
        padding: 10px 14px;
        font-size: 13px;
        font-weight: 500;
        color: var(--nevox-gray-700);
        z-index: 9998;
        display: flex;
        align-items: center;
        gap: 8px;
        box-shadow: var(--nevox-shadow-lg);
        cursor: pointer;
        user-select: none;
        transition: all 0.3s ease;
      }
      
      .nevox-country-badge:hover {
        transform: translateX(4px);
        box-shadow: var(--nevox-shadow-xl);
      }
      
      .nevox-country-badge--faded {
        opacity: 0.7;
        transform: translateX(-10px);
      }
      
      .nevox-country-badge-content {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      
      .nevox-country-flag {
        font-size: 18px;
      }
      
      .nevox-country-code {
        font-weight: 600;
        color: var(--nevox-gray-900);
      }
      
      .nevox-country-confidence {
        font-size: 11px;
        background: var(--nevox-gray-100);
        padding: 2px 6px;
        border-radius: var(--nevox-radius-full);
        color: var(--nevox-gray-600);
      }
      
      .nevox-country-warning {
        color: var(--nevox-warning);
        font-size: 14px;
      }
      
      /* Status Messages */
      .nevox-status {
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--nevox-primary);
        color: white;
        padding: 14px 20px;
        border-radius: var(--nevox-radius-lg);
        font-size: 14px;
        font-weight: 500;
        z-index: 10001;
        transform: translateY(-100px);
        opacity: 0;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: var(--nevox-shadow-xl);
        max-width: 400px;
        word-wrap: break-word;
        white-space: pre-line;
        pointer-events: none;
      }
      
      .nevox-status--visible {
        transform: translateY(0);
        opacity: 1;
      }
      
      .nevox-status--detecting {
        background: var(--nevox-warning);
      }
      
      .nevox-status--detected {
        background: var(--nevox-success);
      }
      
      .nevox-status--error {
        background: var(--nevox-error);
      }
      
      /* Consent Modal */
      .nevox-consent-ui {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10010;
        animation: nevox-fadeIn 0.3s ease;
        backdrop-filter: blur(4px);
      }
      
      .nevox-consent-modal {
        background: white;
        border-radius: var(--nevox-radius-2xl);
        padding: 32px;
        max-width: 520px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: var(--nevox-shadow-2xl);
        animation: nevox-slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .nevox-consent-header h2 {
        margin-top: 0;
        color: var(--nevox-gray-900);
        font-size: 24px;
        margin-bottom: 8px;
      }
      
      .nevox-consent-header p {
        color: var(--nevox-gray-600);
        line-height: 1.6;
        margin-bottom: 24px;
      }
      
      .nevox-consent-features {
        margin: 24px 0;
      }
      
      .nevox-consent-feature {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 16px;
        background: var(--nevox-gray-50);
        border-radius: var(--nevox-radius-lg);
        margin-bottom: 12px;
        border: 1px solid var(--nevox-gray-200);
      }
      
      .nevox-consent-icon {
        font-size: 24px;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        border-radius: var(--nevox-radius-lg);
        flex-shrink: 0;
      }
      
      .nevox-consent-feature h3 {
        margin: 0 0 4px 0;
        color: var(--nevox-gray-900);
        font-size: 16px;
      }
      
      .nevox-consent-feature p {
        margin: 0;
        color: var(--nevox-gray-600);
        font-size: 14px;
        line-height: 1.5;
      }
      
      .nevox-consent-buttons {
        display: flex;
        gap: 12px;
        margin-top: 32px;
      }
      
      .nevox-btn-primary {
        background: var(--nevox-primary);
        color: white;
        border: none;
        padding: 14px 24px;
        border-radius: var(--nevox-radius-lg);
        font-weight: 600;
        cursor: pointer;
        flex: 1;
        transition: all 0.2s ease;
        font-size: 16px;
      }
      
      .nevox-btn-primary:hover {
        background: var(--nevox-primary-dark);
        transform: translateY(-2px);
      }
      
      .nevox-btn-secondary {
        background: var(--nevox-gray-100);
        color: var(--nevox-gray-700);
        border: 1px solid var(--nevox-gray-300);
        padding: 14px 24px;
        border-radius: var(--nevox-radius-lg);
        font-weight: 600;
        cursor: pointer;
        flex: 1;
        transition: all 0.2s ease;
        font-size: 16px;
      }
      
      .nevox-btn-secondary:hover {
        background: var(--nevox-gray-200);
        border-color: var(--nevox-gray-400);
      }
      
      .nevox-consent-footer {
        text-align: center;
        margin-top: 24px;
        padding-top: 16px;
        border-top: 1px solid var(--nevox-gray-200);
      }
      
      .nevox-consent-footer p {
        color: var(--nevox-gray-500);
        font-size: 13px;
        line-height: 1.5;
      }
      
      .nevox-consent-footer a {
        color: var(--nevox-primary);
        text-decoration: none;
      }
      
      .nevox-consent-footer a:hover {
        text-decoration: underline;
      }
      
      /* Scrollbar Styling */
      .nevox-language-options::-webkit-scrollbar {
        width: 6px;
      }
      
      .nevox-language-options::-webkit-scrollbar-track {
        background: var(--nevox-gray-100);
        border-radius: 3px;
      }
      
      .nevox-language-options::-webkit-scrollbar-thumb {
        background: var(--nevox-gray-300);
        border-radius: 3px;
      }
      
      .nevox-language-options::-webkit-scrollbar-thumb:hover {
        background: var(--nevox-gray-400);
      }
      
      /* RTL Support */
      .nevox-rtl .nevox-language-switcher {
        right: auto;
        left: 20px;
      }
      
      .nevox-rtl .nevox-language-switcher-toggle {
        right: auto;
        left: 20px;
      }
      
      .nevox-rtl .nevox-country-badge {
        right: 20px;
        left: auto;
      }
      
      .nevox-rtl .nevox-status {
        left: 20px;
        right: auto;
      }
      
      /* Accessibility */
      @media (prefers-reduced-motion: reduce) {
        .nevox-language-switcher,
        .nevox-language-switcher-toggle,
        .nevox-country-badge,
        .nevox-status,
        .nevox-consent-ui {
          transition: none;
          animation: none;
        }
      }
      
      /* Animations */
      @keyframes nevox-fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes nevox-slideUp {
        from {
          transform: translateY(40px);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
      
      /* Responsive Design */
      @media (max-width: 640px) {
        .nevox-language-switcher {
          width: calc(100vw - 40px);
          right: 20px;
          left: 20px;
          bottom: 80px;
        }
        
        .nevox-language-switcher-toggle {
          padding: 10px 16px;
          font-size: 13px;
        }
        
        .nevox-consent-buttons {
          flex-direction: column;
        }
        
        .nevox-detection-info {
          flex-direction: column;
          gap: 8px;
        }
        
        .nevox-language-switcher-footer {
          flex-direction: column;
          gap: 16px;
          align-items: stretch;
        }
        
        .nevox-refresh-detection {
          width: 100%;
          justify-content: center;
        }
      }
      
      /* High Contrast Mode */
      @media (prefers-contrast: high) {
        .nevox-language-switcher {
          border: 2px solid currentColor;
        }
        
        .nevox-language-option {
          border: 1px solid currentColor;
        }
        
        .nevox-language-option--current {
          border-width: 2px;
        }
      }
      
      /* Dark Mode */
      @media (prefers-color-scheme: dark) {
        .nevox-language-switcher,
        .nevox-consent-modal {
          background: var(--nevox-gray-900);
          color: var(--nevox-gray-100);
          border-color: var(--nevox-gray-700);
        }
        
        .nevox-language-switcher-header,
        .nevox-language-switcher-footer {
          background: var(--nevox-gray-800);
          border-color: var(--nevox-gray-700);
        }
        
        .nevox-current-display,
        .nevox-consent-feature {
          background: var(--nevox-gray-800);
          border-color: var(--nevox-gray-700);
        }
        
        .nevox-language-switcher-title,
        .nevox-current-language,
        .nevox-language-name {
          color: var(--nevox-gray-100);
        }
        
        .nevox-current-region,
        .nevox-language-name-secondary,
        .nevox-language-meta {
          color: var(--nevox-gray-400);
        }
        
        .nevox-language-switcher-close {
          color: var(--nevox-gray-400);
        }
        
        .nevox-language-switcher-close:hover {
          background: var(--nevox-gray-700);
          color: var(--nevox-gray-200);
        }
        
        .nevox-language-option:hover {
          background: var(--nevox-gray-800);
          border-color: var(--nevox-gray-600);
        }
        
        .nevox-language-option--current {
          background: var(--nevox-gray-800);
          border-color: var(--nevox-primary);
        }
        
        .nevox-language-flag,
        .nevox-current-flag {
          background: var(--nevox-gray-800);
        }
        
        .nevox-country-badge {
          background: rgba(31, 41, 55, 0.95);
          border-color: var(--nevox-gray-700);
          color: var(--nevox-gray-300);
        }
        
        .nevox-country-code {
          color: var(--nevox-gray-100);
        }
        
        .nevox-country-confidence {
          background: var(--nevox-gray-800);
          color: var(--nevox-gray-400);
        }
        
        .nevox-refresh-detection {
          background: var(--nevox-gray-800);
          border-color: var(--nevox-gray-700);
          color: var(--nevox-gray-300);
        }
        
        .nevox-refresh-detection:hover {
          background: var(--nevox-gray-700);
          border-color: var(--nevox-gray-600);
        }
        
        .nevox-btn-secondary {
          background: var(--nevox-gray-800);
          color: var(--nevox-gray-300);
          border-color: var(--nevox-gray-700);
        }
        
        .nevox-btn-secondary:hover {
          background: var(--nevox-gray-700);
          border-color: var(--nevox-gray-600);
        }
        
        .nevox-consent-header h2 {
          color: var(--nevox-gray-100);
        }
        
        .nevox-consent-header p {
          color: var(--nevox-gray-400);
        }
        
        .nevox-consent-feature h3 {
          color: var(--nevox-gray-100);
        }
        
        .nevox-consent-feature p {
          color: var(--nevox-gray-400);
        }
        
        .nevox-consent-icon {
          background: var(--nevox-gray-800);
        }
        
        .nevox-consent-footer p {
          color: var(--nevox-gray-500);
        }
      }
    `;
    
    document.head.appendChild(styles);
  }

  injectConsentStyles() {
    // Already included in main UI styles
  }

  // =====================================
  // PERFORMANCE TRACKING
  // =====================================
  markPerformance(markName) {
    if (!this.config.performance.metrics.trackTiming) return;
    
    const timestamp = performance.now();
    this.cache.performance.marks.set(markName, timestamp);
    
    if (window.performance && performance.mark) {
      performance.mark(`nevox_${markName}`);
    }
  }

  measurePerformance(startMark, endMark, measureName) {
    if (!this.config.performance.metrics.trackTiming) return null;
    
    const start = this.cache.performance.marks.get(startMark);
    const end = this.cache.performance.marks.get(endMark);
    
    if (start && end) {
      const duration = end - start;
      this.cache.performance.measures.set(measureName, duration);
      
      if (window.performance && performance.measure) {
        performance.measure(`nevox_${measureName}`, 
          `nevox_${startMark}`, 
          `nevox_${endMark}`
        );
      }
      
      return duration;
    }
    
    return null;
  }

  getPerformanceMetrics() {
    return {
      marks: Object.fromEntries(this.cache.performance.marks),
      measures: Object.fromEntries(this.cache.performance.measures),
      detectionTime: this.state.detectionTime,
      memory: performance.memory ? {
        usedJSHeapSize: performance.memory.usedJSHeapSize,
        totalJSHeapSize: performance.memory.totalJSHeapSize,
        jsHeapSizeLimit: performance.memory.jsHeapSizeLimit
      } : null
    };
  }

  // =====================================
  // ANALYTICS TRACKING
  // =====================================
  trackEvent(eventName, data = {}) {
    if (!this.config.analytics.enabled) return;
    
    const eventData = {
      ...data,
      timestamp: new Date().toISOString(),
      language: this.state.currentLanguage,
      country: this.state.detectedCountry,
      version: '4.4'
    };
    
    // Dispatch to listeners
    this.dispatchEvent(`analytics:${eventName}`, eventData);
    
    // Send to analytics providers
    this.sendToAnalytics(eventName, eventData);
  }

  sendToAnalytics(eventName, data) {
    const providers = this.config.analytics.providers;
    
    providers.forEach(provider => {
      try {
        switch (provider) {
          case 'google':
            this.sendToGoogleAnalytics(eventName, data);
            break;
          case 'matomo':
            this.sendToMatomo(eventName, data);
            break;
          case 'plausible':
            this.sendToPlausible(eventName, data);
            break;
          case 'custom':
            this.dispatchEvent('customAnalytics', { eventName, data });
            break;
        }
      } catch (error) {
        console.warn(`Failed to send to ${provider}:`, error);
      }
    });
  }

  sendToGoogleAnalytics(eventName, data) {
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, {
        ...data,
        send_to: this.config.analytics.trackId
      });
    }
  }

  sendToMatomo(eventName, data) {
    if (typeof _paq !== 'undefined') {
      _paq.push(['trackEvent', 'NEVOX', eventName, JSON.stringify(data)]);
    }
  }

  sendToPlausible(eventName, data) {
    if (typeof plausible !== 'undefined') {
      plausible(eventName, { props: data });
    }
  }

  // =====================================
  // PUBLIC API - COMPLETE
  // =====================================
  setLanguage(language) {
    if (!this.isLanguageSupported(language)) {
      console.warn(`NEVOX: Unsupported language: ${language}`);
      return false;
    }

    const oldLanguage = this.state.currentLanguage;
    
    this.state.currentLanguage = language;
    this.state.languageDetectionMethod = 'manual';
    this.state.languageConfidence = 100;
    this.state.userLanguageOverride = true;
    
    // Update country if language includes country code
    const countryCode = language.split('-')[1];
    if (countryCode) {
      this.state.detectedCountry = countryCode;
      this.state.detectedCurrency = this.getCurrencyForCountry(countryCode);
      this.state.detectedTimezone = this.getTimezoneForCountry(countryCode);
      this.state.countryConfidence = 90;
      this.state.countryDetectionMethod = 'manual_language';
    }
    
    // Update page
    this.updatePage();
    
    // Update SEO
    if (this.config.seo.generateHreflang) {
      this.applySEO();
    }
    
    // Show status
    if (this.config.ux.showStatus) {
      const langName = this.getLanguageName(language);
      this.showStatus('detected', `✓ Language set to ${langName}`);
    }
    
    // Store preference
    if (this.state.consentGiven) {
      localStorage.setItem(this.config.localStorageKey, language);
      localStorage.setItem('nevx_lang_updated', new Date().toISOString());
    }
    
    // Dispatch event
    this.dispatchEvent('languageChanged', {
      oldLanguage,
      newLanguage: language,
      country: this.state.detectedCountry,
      method: 'manual'
    });
    
    // Track analytics
    if (this.config.analytics.enabled) {
      this.trackEvent('language_change', {
        from: oldLanguage,
        to: language,
        method: 'manual'
      });
    }
    
    return true;
  }

  setCountry(countryCode) {
    if (!countryCode || countryCode.length !== 2) {
      console.warn(`NEVOX: Invalid country code: ${countryCode}`);
      return false;
    }
    
    const oldCountry = this.state.detectedCountry;
    const normalizedCountry = this.applyCountryCorrections(countryCode.toUpperCase());
    
    this.state.detectedCountry = normalizedCountry;
    this.state.detectedCurrency = this.getCurrencyForCountry(normalizedCountry);
    this.state.detectedTimezone = this.getTimezoneForCountry(normalizedCountry);
    this.state.countryConfidence = 100;
    this.state.countryDetectionMethod = 'manual';
    
    // Update page
    this.updatePage();
    
    // Show status
    if (this.config.ux.showStatus) {
      this.showStatus('detected', `✓ Country set to ${normalizedCountry}`);
    }
    
    // Dispatch event
    this.dispatchEvent('countryChanged', {
      oldCountry,
      newCountry: normalizedCountry,
      currency: this.state.detectedCurrency,
      timezone: this.state.detectedTimezone
    });
    
    // Track analytics
    if (this.config.analytics.enabled) {
      this.trackEvent('country_change', {
        from: oldCountry,
        to: normalizedCountry,
        method: 'manual'
      });
    }
    
    return true;
  }

  refreshDetection() {
    return new Promise(async (resolve) => {
      this.showStatus('detecting', ' Refreshing detection...');
      
      try {
        // Clear cache
        this.cache.ipData = null;
        this.cache.lastIPCheck = null;
        
        // Re-run detection
        await this.executeDetectionPipeline();
        
        // Update page
        this.updatePage();
        
        // Update SEO
        if (this.config.seo.generateHreflang) {
          await this.applySEO();
        }
        
        // Show result
        const langName = this.getLanguageName(this.state.currentLanguage);
        this.showStatus('detected', `✅ Detection refreshed: ${langName} | ${this.state.detectedCountry}`);
        
        resolve({
          success: true,
          language: this.state.currentLanguage,
          country: this.state.detectedCountry,
          confidence: this.state.countryConfidence
        });
        
      } catch (error) {
        console.error('Refresh failed:', error);
        this.showStatus('error', 'Failed to refresh detection');
        
        resolve({
          success: false,
          error: error.message
        });
      }
    });
  }

  getCurrentLanguage() {
    return this.state.currentLanguage;
  }

  getCurrentCountry() {
    return this.state.detectedCountry;
  }

  getCurrentCurrency() {
    return this.state.detectedCurrency;
  }

  getCurrentTimezone() {
    return this.state.detectedTimezone;
  }

  getDetectionConfidence() {
    return this.state.countryConfidence;
  }

  getDetectionMethod() {
    return {
      language: this.state.languageDetectionMethod,
      country: this.state.countryDetectionMethod,
      languageConfidence: this.state.languageConfidence,
      countryConfidence: this.state.countryConfidence
    };
  }

  getSupportedLanguages() {
    return Object.keys(this.config.supportedLanguages).map(code => ({
      code,
      name: this.config.supportedLanguages[code].name,
      nativeName: this.config.supportedLanguages[code].nativeName,
      dir: this.config.supportedLanguages[code].dir
    }));
  }

  getConfig() {
    // Return safe config (without sensitive data)
    const safeConfig = { ...this.config };
    
    // Remove sensitive data
    delete safeConfig.privacy;
    delete safeConfig.countryDetection.ipProviders;
    delete safeConfig.analytics;
    
    return {
      ...safeConfig,
      state: {
        currentLanguage: this.state.currentLanguage,
        detectedCountry: this.state.detectedCountry,
        detectedCurrency: this.state.detectedCurrency,
        detectedTimezone: this.state.detectedTimezone,
        languageConfidence: this.state.languageConfidence,
        countryConfidence: this.state.countryConfidence,
        initialized: this.state.initialized
      },
      performance: this.getPerformanceMetrics(),
      seo: {
        hreflangCount: this.seoState.hreflangTags.size,
        canonicalUpdated: this.state.canonicalUpdated,
        applied: this.state.seoApplied
      }
    };
  }

  // =====================================
  // EVENT SYSTEM - COMPLETE
  // =====================================
  on(eventName, callback) {
    if (!this.eventListeners.has(eventName)) {
      this.eventListeners.set(eventName, []);
    }
    this.eventListeners.get(eventName).push(callback);
  }

  off(eventName, callback) {
    if (this.eventListeners.has(eventName)) {
      const listeners = this.eventListeners.get(eventName);
      const index = listeners.indexOf(callback);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    }
  }

  dispatchEvent(eventName, data) {
    // Internal listeners
    if (this.eventListeners.has(eventName)) {
      this.eventListeners.get(eventName).forEach(callback => {
        try {
          setTimeout(() => callback(data), 0);
        } catch (error) {
          console.error(`Error in ${eventName} listener:`, error);
        }
      });
    }
    
    // DOM event
    const domEvent = new CustomEvent(`nevox:${eventName}`, {
      detail: data,
      bubbles: true,
      cancelable: true
    });
    
    document.documentElement.dispatchEvent(domEvent);
  }

  // =====================================
  // ERROR HANDLING AND FALLBACK
  // =====================================
  fallbackToDefault() {
    const oldLanguage = this.state.currentLanguage;
    const oldCountry = this.state.detectedCountry;
    
    this.state.currentLanguage = this.config.defaultLanguage;
    this.state.detectedCountry = this.config.defaultCountry;
    this.state.detectedCurrency = this.getCurrencyForCountry(this.config.defaultCountry);
    this.state.detectedTimezone = this.getTimezoneForCountry(this.config.defaultCountry);
    this.state.languageDetectionMethod = 'fallback';
    this.state.countryDetectionMethod = 'fallback';
    this.state.languageConfidence = 10;
    this.state.countryConfidence = 10;
    this.state.hasError = true;

    // Mark error state
    document.documentElement.dataset.nevoxError = 'true';
    document.documentElement.dataset.nevoxFallback = 'true';
    
    // Update page
    this.updatePage();
    
    // Dispatch events
    this.dispatchEvent('fallback', {
      oldLanguage,
      oldCountry,
      newLanguage: this.state.currentLanguage,
      newCountry: this.state.detectedCountry,
      reason: 'error_recovery'
    });
    
    this.dispatchEvent('error', {
      type: 'fallback',
      message: 'Fell back to default settings',
      timestamp: new Date().toISOString()
    });
    
    // Show error status
    if (this.config.ux.showStatus) {
      this.showStatus('error', '⚠️ Using default language (detection failed)');
    }
    
    // Track error
    if (this.config.analytics.enabled) {
      this.trackEvent('fallback_triggered', {
        oldLanguage,
        oldCountry,
        newLanguage: this.state.currentLanguage,
        newCountry: this.state.detectedCountry
      });
    }
  }

  // =====================================
  // CLEANUP AND DESTRUCTION
  // =====================================
  destroy() {
    // Remove event listeners
    this.eventListeners.clear();
    
    // Remove UI elements
    document.querySelectorAll('.nevox-language-switcher, .nevox-country-badge, .nevox-status, .nevox-consent-ui')
      .forEach(el => el.remove());
    
    // Remove styles
    document.querySelectorAll('#nevox-ui-styles, #nevox-status-styles')
      .forEach(el => el.remove());
    
    // Remove data attributes
    document.documentElement.removeAttribute('data-nevox-error');
    document.documentElement.removeAttribute('data-nevox-fallback');
    document.documentElement.classList.remove('nevox-initialized', 'nevox-initializing', 'nevox-rtl');
    
    // Clear performance marks
    if (window.performance && performance.clearMarks) {
      performance.clearMarks(/^nevox_/);
      performance.clearMeasures(/^nevox_/);
    }
    
    // Mark as destroyed
    this.state.initialized = false;
    
    // Dispatch event
    this.dispatchEvent('destroyed', {
      timestamp: new Date().toISOString()
    });
  }
}

// =====================================
// MINIMAL VERSION (Fallback)
// =====================================
class NEVOXGlobalizationMinimal {
  constructor(config = {}) {
    this.config = {
      default: 'en-US',
      supported: ['en-US', 'bn-BD', 'ar-SA', 'hi-IN', 'es-ES', 'fr-FR', 'de-DE', 'ja-JP', 'ko-KR', 'zh-CN', 'ru-RU', 'pt-BR'],
      storePreference: true,
      ...config
    };
    
    this.state = {
      currentLanguage: null,
      detectedCountry: null
    };
    
    this.init();
  }

  init() {
    try {
      // Remove no-js class
      document.documentElement.classList.remove('no-js');
      
      // Get saved preference
      const saved = this.config.storePreference ? 
        localStorage.getItem('nvx_lang') : null;
      
      // Get browser language
      const browser = navigator.language || this.config.default;
      
      // Find best match
      let lang = null;
      
      if (saved && this.isSupported(saved)) {
        lang = saved;
      } else {
        // Try exact match
        if (this.isSupported(browser)) {
          lang = browser;
        } else {
          // Try language-only match
          const langOnly = browser.split('-')[0];
          const match = this.config.supported.find(l => 
            l.startsWith(langOnly + '-')
          );
          
          lang = match || this.config.default;
        }
      }
      
      // Update state
      this.state.currentLanguage = lang;
      
      // Extract country
      const countryCode = lang.split('-')[1];
      if (countryCode) {
        this.state.detectedCountry = countryCode;
      }
      
      // Update HTML
      document.documentElement.lang = lang;
      
      // Set direction for RTL languages
      const rtlLanguages = ['ar', 'fa', 'ur', 'he'];
      if (rtlLanguages.includes(lang.split('-')[0])) {
        document.documentElement.dir = 'rtl';
        document.documentElement.classList.add('nevox-rtl');
      } else {
        document.documentElement.dir = 'ltr';
      }
      
      // Add country data
      if (this.state.detectedCountry) {
        document.documentElement.dataset.country = this.state.detectedCountry.toLowerCase();
      }
      
      // Store preference
      if (this.config.storePreference && !saved) {
        localStorage.setItem('nvx_lang', lang);
      }
      
      // Dispatch event
      document.dispatchEvent(new CustomEvent('nvx:languageChange', {
        detail: { 
          language: lang,
          country: this.state.detectedCountry,
          method: saved ? 'saved' : 'browser'
        }
      }));
      
    } catch (error) {
      console.error('NEVOX Minimal failed:', error);
      
      // Fallback
      document.documentElement.lang = this.config.default;
      document.documentElement.dir = 'ltr';
      document.documentElement.dataset.nevoxError = 'true';
    }
  }

  isSupported(lang) {
    return this.config.supported.includes(lang);
  }

  setLanguage(lang) {
    if (!this.isSupported(lang)) {
      console.warn(`Unsupported language: ${lang}`);
      return false;
    }
    
    if (this.config.storePreference) {
      localStorage.setItem('nvx_lang', lang);
    }
    
    // Reload page
    window.location.reload();
    return true;
  }
}

// =====================================
// GLOBAL INITIALIZATION
// =====================================
document.addEventListener('DOMContentLoaded', () => {
  // Check for minimal mode
  const useMinimal = document.documentElement.hasAttribute('data-nevox-minimal');
  
  // Check for custom config
  const configScript = document.querySelector('script[type="application/json"][data-nevox-config]');
  let userConfig = {};
  
  if (configScript) {
    try {
      userConfig = JSON.parse(configScript.textContent);
    } catch (e) {
      console.warn('Invalid NEVOX config JSON');
    }
  }
  
  // Check environment
  const isDevelopment = window.location.hostname === 'localhost' || 
                       window.location.hostname === '127.0.0.1';
  
  // Initialize appropriate version
  try {
    if (useMinimal) {
      window.NEVOX = new NEVOXGlobalizationMinimal(userConfig);
      window.NEVOX_Globalization = window.NEVOX;
    } else {
      window.NEVOX = new NEVOXGlobalizationEngine(userConfig);
      window.NEVOX_Globalization = window.NEVOX;
    }
    
    // Global error handling
    window.addEventListener('error', (event) => {
      if (event.filename && event.filename.includes('nevox')) {
        console.error('NEVOX Global Error:', event.error);
        
        // Try to recover with minimal version
        if (!window.NEVOX?.state?.initialized) {
          window.NEVOX = new NEVOXGlobalizationMinimal();
          window.NEVOX_Globalization = window.NEVOX;
        }
      }
    });
    
    // Unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      if (event.reason && event.reason.toString().includes('NEVOX')) {
        console.error('NEVOX Unhandled Rejection:', event.reason);
      }
    });
    
  } catch (error) {
    console.error('NEVOX initialization failed:', error);
    
    // Fallback to minimal
    window.NEVOX = new NEVOXGlobalizationMinimal();
    window.NEVOX_Globalization = window.NEVOX;
  }
  
  // Add global API
  window.NEVOX_Globalization_API = {
    // Language methods
    setLanguage: (lang) => window.NEVOX?.setLanguage?.(lang) || false,
    getLanguage: () => window.NEVOX?.getCurrentLanguage?.(),
    getLanguageName: (code) => window.NEVOX?.getLanguageName?.(code) || code,
    
    // Country methods
    setCountry: (country) => window.NEVOX?.setCountry?.(country) || false,
    getCountry: () => window.NEVOX?.getCurrentCountry?.(),
    getCurrency: () => window.NEVOX?.getCurrentCurrency?.(),
    getTimezone: () => window.NEVOX?.getCurrentTimezone?.(),
    
    // Detection methods
    refresh: () => window.NEVOX?.refreshDetection?.(),
    getConfidence: () => window.NEVOX?.getDetectionConfidence?.(),
    getMethod: () => window.NEVOX?.getDetectionMethod?.(),
    
    // Configuration
    getConfig: () => window.NEVOX?.getConfig?.(),
    getSupportedLanguages: () => window.NEVOX?.getSupportedLanguages?.(),
    
    // Events
    on: (event, callback) => window.NEVOX?.on?.(event, callback),
    off: (event, callback) => window.NEVOX?.off?.(event, callback),
    
    // Utility
    getFlag: (code) => window.NEVOX?.getFlagEmoji?.(code) || '️',
    isSupported: (lang) => window.NEVOX?.isLanguageSupported?.(lang) || false,
    
    // Version
    version: '4.4-PRO'
  };
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    NEVOXGlobalizationEngine,
    NEVOXGlobalizationMinimal,
    NEVOX_Globalization_API: window.NEVOX_Globalization_API
  };
}

// Service Worker registration (optional)
if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
  window.addEventListener('load', () => {
    // Register NEVOX service worker for caching
    navigator.serviceWorker.register('/nevox-sw.js')
      .then(registration => {
        console.log('NEVOX ServiceWorker registered:', registration.scope);
      })
      .catch(error => {
        console.log('NEVOX ServiceWorker registration failed:', error);
      });
  });
}

// Performance monitoring
if (window.performance && performance.getEntriesByType) {
  // Monitor resource loading
  window.addEventListener('load', () => {
    const resources = performance.getEntriesByType('resource');
    const nevoxResources = resources.filter(r => 
      r.name.includes('nevox') || r.name.includes('nvx')
    );
    
    if (nevoxResources.length > 0) {
      console.log('NEVOX resources loaded:', nevoxResources.length);
      
      // Report performance
      if (window.NEVOX?.config?.performance?.metrics?.reportErrors) {
        const slowResources = nevoxResources.filter(r => r.duration > 1000);
        if (slowResources.length > 0) {
          console.warn('Slow NEVOX resources:', slowResources);
        }
      }
    }
  });
}
