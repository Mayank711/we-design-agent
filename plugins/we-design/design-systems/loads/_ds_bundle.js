/* @ds-bundle: {"format":3,"namespace":"WheelsEyeLoadsDesignSystem_985cfc","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"PremiumPill","sourcePath":"components/core/PremiumPill.jsx"},{"name":"FilterChip","sourcePath":"components/forms/FilterChip.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"ToggleSwitch","sourcePath":"components/forms/ToggleSwitch.jsx"},{"name":"LoadCard","sourcePath":"components/loads/LoadCard.jsx"},{"name":"LoadListCard","sourcePath":"components/loads/LoadListCard.jsx"},{"name":"RouteLadder","sourcePath":"components/loads/RouteLadder.jsx"},{"name":"BottomNav","sourcePath":"components/navigation/BottomNav.jsx"},{"name":"SegmentedTabs","sourcePath":"components/navigation/SegmentedTabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"d724e2f2f95e","components/core/Button.jsx":"bedbcbe0c550","components/core/PremiumPill.jsx":"d00c2893b91d","components/forms/FilterChip.jsx":"811c7b52afe7","components/forms/Input.jsx":"09b4f5b0e9c0","components/forms/ToggleSwitch.jsx":"036779256291","components/loads/LoadCard.jsx":"79f1308f6a64","components/loads/LoadListCard.jsx":"3f49d8150cc4","components/loads/RouteLadder.jsx":"602e4f6e700d","components/navigation/BottomNav.jsx":"0ef66925984e","components/navigation/SegmentedTabs.jsx":"8d5d05a0b252","ui_kits/loads-app/screens.jsx":"c549e86bbb76","ui_kits/loads-listing/screens.jsx":"ca515a6f826b","ui_kits/rewards-milestone/shared.jsx":"02846e807eae","ui_kits/rewards-milestone/tweaks-panel.jsx":"6591467622ed","ui_kits/rewards-milestone/variations.jsx":"f3cac22fd9fa"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WheelsEyeLoadsDesignSystem_985cfc = window.WheelsEyeLoadsDesignSystem_985cfc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small status badge. Tone maps to the WheelsEye semantic palette:
 * success (green), danger (red), accept (gold), info (blue), premium (violet),
 * neutral (gray). Used for verified tags, demand status, KYC state.
 */
function Badge({
  children,
  tone = 'success',
  icon = null,
  style = {},
  ...rest
}) {
  const tones = {
    success: {
      color: 'var(--we-green-600)',
      background: 'var(--we-green-tint)'
    },
    danger: {
      color: 'var(--color-danger)',
      background: 'var(--we-red-tint)'
    },
    accept: {
      color: 'var(--we-yellow-text)',
      background: 'var(--we-yellow-tint)'
    },
    info: {
      color: 'var(--we-blue-secondary)',
      background: 'var(--we-blue-tint)'
    },
    premium: {
      color: 'var(--color-premium)',
      background: 'var(--we-violet-tint)'
    },
    neutral: {
      color: 'var(--text-caption)',
      background: 'var(--surface-page)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-caption)',
      lineHeight: 1.5,
      padding: '4px 10px',
      borderRadius: 'var(--radius-sm)',
      ...tones[tone],
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * WheelsEye Loads primary button system.
 * Mirrors caraxes CustomButton variants: solid (green), outlined (green),
 * yellow, black, hollow, link. Full-width by default, 12px radius, 48px tall,
 * presses with a 0.95 scale over 300ms.
 */
function Button({
  children,
  variant = 'solid',
  size = 'md',
  disabled = false,
  fullWidth = true,
  leadingIcon = null,
  trailingIcon = null,
  onClick,
  style = {},
  ...rest
}) {
  const base = {
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--weight-medium)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: `transform var(--dur-press) var(--ease-standard), filter var(--dur-press) var(--ease-standard)`,
    borderRadius: 'var(--radius-lg)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    width: fullWidth ? '100%' : 'auto',
    boxSizing: 'border-box',
    lineHeight: 1.33,
    WebkitTapHighlightColor: 'transparent'
  };
  const sizes = {
    md: {
      height: 48,
      padding: '0 16px',
      fontSize: 'var(--text-title)'
    },
    sm: {
      height: 40,
      padding: '0 16px',
      fontSize: 'var(--text-body-lg)'
    },
    inline: {
      height: 'auto',
      padding: 0,
      fontSize: 'var(--text-body-lg)'
    }
  };
  const variants = {
    solid: {
      background: 'var(--color-primary)',
      color: 'var(--text-on-primary)',
      border: '1px solid var(--color-primary)'
    },
    outlined: {
      background: 'var(--surface-card)',
      color: 'var(--color-primary)',
      border: '1px solid var(--color-primary)'
    },
    yellow: {
      background: 'var(--color-accent)',
      color: 'var(--we-black)',
      border: '1px solid var(--color-accent)'
    },
    black: {
      background: 'var(--we-black)',
      color: 'var(--we-white)',
      border: 'none'
    },
    hollow: {
      background: 'var(--surface-card)',
      color: 'var(--we-black)',
      border: '1px solid var(--border-input)'
    },
    danger: {
      background: 'var(--surface-card)',
      color: 'var(--color-danger-strong)',
      border: '1px solid var(--color-danger)'
    },
    link: {
      background: 'transparent',
      color: 'var(--text-link)',
      border: 'none',
      fontWeight: 'var(--weight-semibold)',
      width: 'auto',
      padding: 0,
      height: 'auto'
    }
  };
  const disabledStyle = disabled ? variant === 'solid' ? {
    opacity: 0.3
  } : variant === 'link' ? {
    color: 'var(--text-caption)'
  } : {
    background: 'var(--we-gray-300)',
    color: 'var(--text-caption)',
    borderColor: 'var(--we-gray-300)'
  } : {};
  const resolvedSize = variant === 'link' ? sizes.inline : sizes[size];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
    style: {
      ...base,
      ...resolvedSize,
      ...variants[variant],
      ...disabledStyle,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = `scale(${'var(--press-scale)' && 0.95})`;
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), leadingIcon, children, trailingIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/PremiumPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The signature violet "thunder" pill used across WheelsEye Loads to surface
 * bid-maximisation nudges and premium hints. Gradient pill (#F8F5FF → #FFF),
 * Poppins copy in violet, with a leading thunder glyph.
 */
function PremiumPill({
  children,
  icon = '\u26A1',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      background: 'var(--pill-premium-grad)',
      color: 'var(--color-premium)',
      fontFamily: 'var(--font-secondary)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-body-sm)',
      lineHeight: '22px',
      padding: '10px 12px',
      borderRadius: 'var(--radius-pill)',
      width: 'fit-content',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      fontSize: '16px',
      lineHeight: 1
    }
  }, icon), children);
}
Object.assign(__ds_scope, { PremiumPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PremiumPill.jsx", error: String((e && e.message) || e) }); }

// components/forms/FilterChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Selectable filter chip — used for vehicle-type and load filters. Selected
 * state uses a green tint background + green border (per marketing TyreCard).
 */
function FilterChip({
  children,
  selected = false,
  icon = null,
  onClick,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-body-sm)',
      fontWeight: selected ? 'var(--weight-medium)' : 'var(--weight-regular)',
      color: 'var(--we-black)',
      padding: '8px 14px',
      borderRadius: 'var(--radius-lg)',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      background: selected ? 'var(--we-green-tint-select)' : 'var(--surface-card)',
      border: `1px solid ${selected ? 'var(--color-primary)' : 'var(--border-soft, var(--border-divider))'}`,
      transition: 'background 150ms var(--ease-standard), border-color 150ms var(--ease-standard)',
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { FilterChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FilterChip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Labeled text input following the WheelsEye onboarding/KYC field style:
 * 12px-radius white box, gray border, label above, optional helper / error.
 */
function Input({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  helper,
  error,
  disabled = false,
  prefix = null,
  inputMode,
  maxLength,
  style = {},
  ...rest
}) {
  const borderColor = error ? 'var(--color-danger)' : 'var(--border-input)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-caption)',
      marginBottom: '6px'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-lg)',
      padding: '12px 16px',
      background: disabled ? 'var(--surface-page)' : 'var(--surface-card)'
    }
  }, prefix, /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    inputMode: inputMode,
    maxLength: maxLength,
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-body-lg)',
      color: 'var(--text-body)',
      width: '100%',
      minWidth: 0
    }
  }, rest))), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: '6px',
      fontSize: 'var(--text-caption)',
      color: error ? 'var(--color-danger)' : 'var(--text-muted)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/ToggleSwitch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Toggle switch matching the load-alert TogglePillButton: a pill track that
 * turns green when active with a sliding white knob.
 */
function ToggleSwitch({
  checked = false,
  onChange,
  disabled = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 44,
      height: 26,
      borderRadius: 'var(--radius-full)',
      border: 'none',
      background: checked ? 'var(--color-primary)' : 'var(--we-gray-300)',
      position: 'relative',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      padding: 0,
      flexShrink: 0,
      transition: 'background 200ms var(--ease-standard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--we-white)',
      boxShadow: '0 1px 3px rgba(0,0,0,0.25)',
      transition: 'left 200ms var(--ease-standard)'
    }
  }));
}
Object.assign(__ds_scope, { ToggleSwitch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ToggleSwitch.jsx", error: String((e && e.message) || e) }); }

// components/loads/LoadListCard.jsx
try { (() => {
/* Footer tone tokens — mirror cards.color.ts (BG_COLOR / TEXT_COLOR / BUTTON_BG). */
const FOOTER = {
  OK: {
    bg: 'var(--we-green-tint)',
    text: 'var(--we-green-primary)',
    btn: 'var(--we-green-primary)',
    btnText: '#fff'
  },
  RED: {
    bg: 'var(--we-red-tint)',
    text: 'var(--we-red-primary)',
    btn: 'var(--we-red-secondary)',
    btnText: '#fff'
  },
  GOLDEN: {
    bg: 'var(--we-surface)',
    text: 'var(--we-yellow-text)',
    btn: 'var(--we-green-primary)',
    btnText: '#fff'
  }
};
function FooterButton({
  children,
  bg,
  color,
  full,
  onClick,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: e => {
      e.stopPropagation();
      onClick && onClick();
    },
    style: {
      border: 'none',
      background: bg,
      color,
      borderRadius: 'var(--radius-lg)',
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: '18px',
      lineHeight: '24px',
      padding: '12px 24px',
      width: full ? '100%' : 'auto',
      whiteSpace: 'nowrap',
      transition: 'transform var(--dur-press) var(--ease-standard)',
      ...style
    },
    onPointerDown: e => {
      e.currentTarget.style.transform = 'scale(0.97)';
    },
    onPointerUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onPointerLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, children);
}

/* Left desc + big amount, right CTA — the QUOTE / CONFIRM footer shell. */
function ContentFooter({
  tone,
  desc,
  descColor,
  amount,
  buttonDesc,
  btnBg,
  btnText,
  onAction
}) {
  const t = FOOTER[tone] || FOOTER.OK;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      background: t.bg,
      padding: '12px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '16px',
      fontWeight: 'var(--weight-medium)',
      lineHeight: '24px',
      color: descColor || t.text
    }
  }, desc), amount != null && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '24px',
      fontWeight: 'var(--weight-medium)',
      lineHeight: '32px',
      color: 'var(--we-black)'
    }
  }, amount)), /*#__PURE__*/React.createElement(FooterButton, {
    bg: btnBg || t.btn,
    color: btnText || t.btnText,
    onClick: onAction
  }, buttonDesc));
}
function renderFooter(footer) {
  if (!footer) return null;
  switch (footer.variant) {
    case 'quote':
      return /*#__PURE__*/React.createElement(ContentFooter, {
        tone: footer.color || 'OK',
        desc: footer.desc,
        amount: footer.amount,
        buttonDesc: footer.buttonDesc,
        btnBg: footer.color === 'RED' ? 'var(--we-red-primary)' : 'var(--we-green-primary)',
        onAction: footer.onAction
      });
    case 'confirm':
      return /*#__PURE__*/React.createElement(ContentFooter, {
        tone: "GOLDEN",
        desc: footer.desc,
        descColor: "var(--we-black)",
        amount: footer.amount,
        buttonDesc: footer.buttonDesc,
        btnBg: "var(--we-green-primary)",
        onAction: footer.onAction
      });
    case 'accept':
      return /*#__PURE__*/React.createElement("div", {
        style: {
          padding: '0 8px 6px'
        }
      }, /*#__PURE__*/React.createElement(FooterButton, {
        full: true,
        bg: "var(--we-green-primary)",
        color: "#fff",
        onClick: footer.onAction
      }, footer.buttonDesc));
    case 'bidding':
      return /*#__PURE__*/React.createElement("div", {
        style: {
          background: 'var(--we-surface)',
          padding: '14px',
          borderRadius: 'var(--radius-lg)',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }
      }, footer.desc && /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: 'var(--font-secondary)',
          fontWeight: 'var(--weight-semibold)',
          fontSize: '16px',
          lineHeight: '24px',
          textAlign: 'center',
          color: 'var(--we-black)'
        }
      }, footer.desc), /*#__PURE__*/React.createElement(FooterButton, {
        full: true,
        bg: "var(--we-green-primary)",
        color: "#fff",
        onClick: footer.onAction
      }, footer.buttonDesc), footer.rejectDesc && /*#__PURE__*/React.createElement(FooterButton, {
        full: true,
        bg: "var(--we-surface)",
        color: "var(--we-green-primary)",
        onClick: footer.onReject,
        style: {
          border: '1px solid var(--we-green-primary)'
        }
      }, footer.rejectDesc));
    default:
      return null;
  }
}

/**
 * Production-faithful WheelsEye load-listing card. Data-driven exactly like the
 * app's `Card` + factory: an optional header banner / countdown / OTP strip, the
 * green-circle/red-square address ladder, icon detail rows (a `GREEN` row becomes
 * a violet "magic" pill), an optional thunder sticky pill, and one of the footer
 * variants — quote, confirm, accept, or bidding.
 */
function LoadListCard({
  headerWidget = null,
  infoWidget = null,
  otpHeader = null,
  addresses = [],
  items = [],
  stickyWidget = null,
  footer = null,
  disabled = false,
  onClick,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      background: 'var(--we-white)',
      border: '1px solid var(--we-border)',
      boxShadow: 'var(--shadow-card)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      position: 'relative',
      fontFamily: 'var(--font-display)',
      cursor: onClick ? 'pointer' : 'default',
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, headerWidget && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: '12px 12px 0 0',
      padding: '8px',
      background: 'var(--we-surface)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6px'
    }
  }, headerWidget.iconSrc && /*#__PURE__*/React.createElement("img", {
    src: headerWidget.iconSrc,
    alt: "",
    width: 18,
    height: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '14px',
      fontWeight: 'var(--weight-regular)',
      lineHeight: '22px',
      color: 'var(--we-black)'
    },
    dangerouslySetInnerHTML: {
      __html: headerWidget.text
    }
  }))), infoWidget && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: '12px 12px 0 0',
      padding: '6px',
      textAlign: 'center',
      fontSize: '16px',
      lineHeight: '24px',
      background: infoWidget.color === 'YELLOW' ? 'var(--we-surface)' : 'var(--we-green-tint)'
    }
  }, infoWidget.desc, " ", infoWidget.timer && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-medium)'
    }
  }, infoWidget.timer))), otpHeader && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'radial-gradient(50% 50% at 50% 50%, #FFDE91 0%, #FFF2D6 100%)',
      padding: '10px 16px',
      borderRadius: '10px 10px 0 0',
      margin: '4px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '16px',
      fontWeight: 'var(--weight-semibold)',
      lineHeight: '24px',
      color: '#671A17'
    }
  }, otpHeader)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      padding: '20px 16px 0'
    }
  }, addresses.map((add, i) => {
    const loading = add.type !== 'UNLOADING';
    const last = i === addresses.length - 1;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: 'relative',
        paddingLeft: '24px',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        top: '15px',
        width: '8px',
        height: '8px',
        background: loading ? 'var(--point-loading)' : 'var(--point-unloading)',
        borderRadius: loading ? '50%' : '0'
      }
    }), !last && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: '3px',
        top: '28px',
        height: '85%',
        borderLeft: '1px dashed var(--we-black)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '20px',
        fontWeight: 'var(--weight-semibold)',
        lineHeight: '30px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, add.heading), add.subHeading && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '16px',
        fontWeight: 'var(--weight-regular)',
        lineHeight: '24px',
        color: 'var(--we-gray-500)'
      }
    }, add.subHeading));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--we-border-soft)',
      marginTop: '4px'
    }
  })), items.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: '16px',
      paddingRight: '16px',
      marginTop: '16px'
    }
  }, items.map((it, i) => it.color === 'GREEN' ? /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      background: 'var(--pill-premium-grad)',
      color: 'var(--we-violet-primary)',
      fontFamily: 'var(--font-secondary)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: '16px',
      lineHeight: '22px',
      padding: '9px 12px',
      borderRadius: 'var(--radius-pill)',
      width: 'fit-content',
      marginTop: '8px'
    }
  }, it.iconSrc && /*#__PURE__*/React.createElement("img", {
    src: it.iconSrc,
    alt: "",
    width: 20,
    height: 20
  }), it.desc) : /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '16px',
      fontSize: '18px',
      fontWeight: 'var(--weight-regular)',
      lineHeight: '24px'
    }
  }, it.iconSrc && /*#__PURE__*/React.createElement("img", {
    src: it.iconSrc,
    alt: "",
    width: 24,
    height: 24,
    style: {
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", null, it.desc)))), stickyWidget && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: '16px',
      marginBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      background: 'var(--pill-premium-grad)',
      color: 'var(--we-violet-primary)',
      fontFamily: 'var(--font-secondary)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: '14px',
      lineHeight: '22px',
      padding: '10px 12px',
      borderRadius: 'var(--radius-pill)'
    }
  }, stickyWidget.iconSrc && /*#__PURE__*/React.createElement("img", {
    src: stickyWidget.iconSrc,
    alt: "",
    width: 24,
    height: 24
  }), stickyWidget.desc)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px'
    }
  }, renderFooter(footer)));
}
Object.assign(__ds_scope, { LoadListCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/loads/LoadListCard.jsx", error: String((e && e.message) || e) }); }

// components/loads/RouteLadder.jsx
try { (() => {
/**
 * Origin → destination route ladder. Loading points render as a green circle,
 * the final unloading point as a red square, joined by a dashed vertical line —
 * the exact convention from the WheelsEye load card.
 *
 * stops: [{ heading, subHeading?, type: 'LOADING' | 'UNLOADING' }]
 */
function RouteLadder({
  stops = [],
  headingSize = 'var(--text-h3)',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      ...style
    }
  }, stops.map((stop, i) => {
    const isLoading = stop.type !== 'UNLOADING';
    const last = i === stops.length - 1;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: 'relative',
        paddingLeft: '24px',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        top: '13px',
        width: '8px',
        height: '8px',
        background: isLoading ? 'var(--point-loading)' : 'var(--point-unloading)',
        borderRadius: isLoading ? '50%' : '0'
      }
    }), !last && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: '3px',
        top: '24px',
        height: 'calc(100% - 4px)',
        borderLeft: '1px dashed var(--we-black)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--weight-semibold)',
        fontSize: headingSize,
        lineHeight: 1.5,
        color: 'var(--text-body)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, stop.heading), stop.subHeading && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--weight-regular)',
        fontSize: 'var(--text-body-lg)',
        lineHeight: 1.5,
        color: 'var(--text-muted)'
      }
    }, stop.subHeading));
  }));
}
Object.assign(__ds_scope, { RouteLadder });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/loads/RouteLadder.jsx", error: String((e && e.message) || e) }); }

// components/loads/LoadCard.jsx
try { (() => {
/**
 * The flagship WheelsEye load card. White, 12px radius, soft shadow; optional
 * header banner (timer / verified), a route ladder, detail rows with icons,
 * and a colored fare footer with a CTA. Footer tone: ok (green), alert (red),
 * accept (gold).
 *
 * details: [{ icon?: ReactNode, text: string }]
 */
function LoadCard({
  stops = [],
  details = [],
  banner = null,
  bannerTone = 'ok',
  fareLabel = 'Fixed price',
  fare,
  footerTone = 'ok',
  ctaLabel = 'Book load',
  onCta,
  premiumNote = null,
  onClick,
  style = {}
}) {
  const bannerTones = {
    ok: {
      background: 'var(--surface-ok)',
      color: 'var(--we-green-600)'
    },
    accept: {
      background: 'radial-gradient(50% 50% at 50% 50%, #FFDE91 0%, #FFF2D6 100%)',
      color: '#671A17'
    },
    alert: {
      background: 'var(--surface-alert)',
      color: 'var(--color-danger)'
    }
  };
  const footerTones = {
    ok: {
      background: 'var(--surface-ok)',
      label: 'var(--color-primary)',
      btn: 'var(--color-primary)'
    },
    accept: {
      background: 'var(--surface-page)',
      label: 'var(--we-yellow-text)',
      btn: 'var(--color-accent)'
    },
    alert: {
      background: 'var(--surface-alert)',
      label: 'var(--color-danger)',
      btn: 'var(--color-danger-strong)'
    }
  };
  const ft = footerTones[footerTone];
  const btnTextColor = footerTone === 'accept' ? 'var(--we-black)' : 'var(--we-white)';
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card)',
      overflow: 'hidden',
      fontFamily: 'var(--font-display)',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, banner && /*#__PURE__*/React.createElement("div", {
    style: {
      ...bannerTones[bannerTone],
      padding: '8px',
      textAlign: 'center',
      fontSize: 'var(--text-body-lg)',
      fontWeight: 'var(--weight-medium)',
      lineHeight: 1.5
    }
  }, banner), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 16px 16px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.RouteLadder, {
    stops: stops
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-divider)',
      margin: '16px 0 16px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }
  }, details.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      fontSize: 'var(--text-title)',
      lineHeight: 1.33
    }
  }, d.icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, d.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-body)'
    }
  }, d.text)))), premiumNote && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '20px'
    }
  }, premiumNote)), fare != null && /*#__PURE__*/React.createElement("div", {
    style: {
      background: ft.background,
      padding: '12px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-lg)',
      fontWeight: 'var(--weight-medium)',
      color: ft.label,
      lineHeight: 1.5
    }
  }, fareLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-rate)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-body)',
      lineHeight: 1.33
    }
  }, fare)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: e => {
      e.stopPropagation();
      onCta && onCta();
    },
    style: {
      border: 'none',
      background: ft.btn,
      color: btnTextColor,
      padding: '12px 28px',
      borderRadius: 'var(--radius-lg)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-title)',
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, ctaLabel)));
}
Object.assign(__ds_scope, { LoadCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/loads/LoadCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomNav.jsx
try { (() => {
/**
 * Bottom tab bar — the app's primary navigation (Loads, Lanes, Help, etc).
 * Active item shows in green; each item takes an icon node (and optional
 * activeIcon). Fixed white bar with a top hairline.
 *
 * items: [{ id, label, icon, activeIcon? }]
 */
function BottomNav({
  items = [],
  active,
  onChange,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      background: 'var(--surface-card)',
      borderTop: '1px solid var(--border-card)',
      boxShadow: 'var(--shadow-footer)',
      ...style
    }
  }, items.map(item => {
    const isActive = item.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: item.id,
      type: "button",
      onClick: () => onChange && onChange(item.id),
      style: {
        flex: 1,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        padding: '10px 4px',
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-caption)',
        fontWeight: isActive ? 'var(--weight-semibold)' : 'var(--weight-medium)',
        color: isActive ? 'var(--color-primary)' : 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isActive ? 1 : 0.7
      }
    }, isActive && item.activeIcon ? item.activeIcon : item.icon), item.label);
  }));
}
Object.assign(__ds_scope, { BottomNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SegmentedTabs.jsx
try { (() => {
/**
 * Segmented tab control — the home "New Loads / My Loads" switcher. The active
 * tab sits on a white pill with the inactive track behind it.
 * tabs: [{ id, label }]
 */
function SegmentedTabs({
  tabs = [],
  active,
  onChange,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '4px',
      padding: '4px',
      background: 'var(--surface-page)',
      borderRadius: 'var(--radius-lg)',
      ...style
    }
  }, tabs.map(tab => {
    const isActive = tab.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: tab.id,
      type: "button",
      onClick: () => onChange && onChange(tab.id),
      style: {
        flex: 1,
        border: 'none',
        cursor: 'pointer',
        padding: '10px 12px',
        borderRadius: 'var(--radius-md)',
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-body-lg)',
        fontWeight: isActive ? 'var(--weight-semibold)' : 'var(--weight-medium)',
        color: isActive ? 'var(--color-primary)' : 'var(--text-muted)',
        background: isActive ? 'var(--surface-card)' : 'transparent',
        boxShadow: isActive ? 'var(--shadow-card)' : 'none',
        transition: 'all 180ms var(--ease-standard)'
      }
    }, tab.label);
  }));
}
Object.assign(__ds_scope, { SegmentedTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SegmentedTabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/loads-app/screens.jsx
try { (() => {
/* WheelsEye Loads — UI kit screens. Composes design-system primitives from
   window.WheelsEyeLoadsDesignSystem_985cfc. Recreation of the real app surfaces. */
const DS = window.WheelsEyeLoadsDesignSystem_985cfc;
const {
  Button,
  LoadCard,
  RouteLadder,
  SegmentedTabs,
  BottomNav,
  FilterChip,
  Badge,
  PremiumPill,
  ToggleSwitch
} = DS;
const ICON = '../../assets/icons/';
const LOGO = '../../assets/logos/';
const ILLO = '../../assets/illustrations/';
const Img = (src, size, alt = '') => /*#__PURE__*/React.createElement("img", {
  src: src,
  width: size,
  height: size,
  alt: alt,
  style: {
    display: 'block'
  }
});

/* ---------- sample data ---------- */
const LOADS = [{
  id: 1,
  banner: 'Closes in 04:32',
  bannerTone: 'accept',
  stops: [{
    heading: 'Jaipur, Rajasthan',
    type: 'LOADING'
  }, {
    heading: 'Surat, Gujarat',
    type: 'UNLOADING'
  }],
  details: [{
    text: '32 ft Multi-axle  •  Full load'
  }, {
    text: '21 Tonnes  •  Cement'
  }],
  premium: 'Earn 12% more on this lane',
  fareLabel: 'Fixed price',
  fare: '₹48,000',
  footerTone: 'ok'
}, {
  id: 2,
  stops: [{
    heading: 'Delhi',
    type: 'LOADING'
  }, {
    heading: 'Mumbai, Maharashtra',
    type: 'UNLOADING'
  }],
  details: [{
    text: '22 ft Open body  •  Part load'
  }, {
    text: '9 Tonnes  •  Steel coils'
  }],
  fareLabel: 'Expected',
  fare: '₹36,500',
  footerTone: 'ok'
}, {
  id: 3,
  banner: 'Verified shipper',
  bannerTone: 'ok',
  stops: [{
    heading: 'Ahmedabad, Gujarat',
    type: 'LOADING'
  }, {
    heading: 'Pune, Maharashtra',
    type: 'UNLOADING'
  }],
  details: [{
    text: '19 ft Container  •  Full load'
  }, {
    text: '7 Tonnes  •  FMCG goods'
  }],
  fareLabel: 'Fixed price',
  fare: '₹29,800',
  footerTone: 'ok'
}];
const VEHICLE_TYPES = ['All', 'Open body', 'Container', 'Trailer', 'Tanker'];

/* ===================================================================
   HOME SCREEN
   =================================================================== */
function HomeScreen({
  go
}) {
  const [tab, setTab] = React.useState('new');
  const [vt, setVt] = React.useState('All');
  const [alert, setAlert] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-header)',
      padding: '14px 16px 36px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: '50%',
      width: 38,
      height: 38,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-fab)'
    }
  }, Img(LOGO + 'wheelseye-mark.svg', 26)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontWeight: 700,
      fontSize: 16,
      lineHeight: 1.2
    }
  }, "WheelsEye Loads"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'rgba(255,255,255,0.8)',
      fontSize: 12
    }
  }, "HR55 AB 1234 \xB7 32ft MXL"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: '50%',
      width: 32,
      height: 32,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, Img(ICON + 'language.svg', 18)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      background: 'rgba(255,255,255,0.14)',
      borderRadius: 999,
      padding: '5px 8px 5px 10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff',
      fontSize: 12,
      fontWeight: 500
    }
  }, "Alerts"), /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: alert,
    onChange: setAlert
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: '24px 24px 0 0',
      marginTop: -20,
      position: 'relative',
      paddingTop: 16,
      minHeight: 400
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px'
    }
  }, /*#__PURE__*/React.createElement(SegmentedTabs, {
    tabs: [{
      id: 'new',
      label: 'New Loads'
    }, {
      id: 'mine',
      label: 'My Loads'
    }],
    active: tab,
    onChange: setTab
  })), tab === 'new' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      overflowX: 'auto',
      padding: '16px',
      scrollbarWidth: 'none'
    }
  }, VEHICLE_TYPES.map(t => /*#__PURE__*/React.createElement(FilterChip, {
    key: t,
    selected: vt === t,
    onClick: () => setVt(t)
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      padding: '0 16px 24px'
    }
  }, LOADS.map(l => /*#__PURE__*/React.createElement(LoadCard, {
    key: l.id,
    banner: l.banner,
    bannerTone: l.bannerTone,
    stops: l.stops,
    details: l.details,
    premiumNote: l.premium ? /*#__PURE__*/React.createElement(PremiumPill, null, l.premium) : null,
    fareLabel: l.fareLabel,
    fare: l.fare,
    footerTone: l.footerTone,
    ctaLabel: "Book load",
    onCta: () => go('detail', l),
    onClick: () => go('detail', l)
  })))) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 24px',
      textAlign: 'center'
    }
  }, Img(ILLO + 'empty-loads.svg', 120), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      fontWeight: 600,
      fontSize: 18
    }
  }, "No booked loads yet"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      color: 'var(--text-muted)',
      fontSize: 14
    }
  }, "Loads you book will appear here for tracking."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outlined",
    fullWidth: false,
    onClick: () => setTab('new')
  }, "Browse new loads")))));
}

/* ===================================================================
   LOAD DETAIL SCREEN
   =================================================================== */
function LoadDetailScreen({
  go,
  load
}) {
  const l = load || LOADS[0];
  const [booked, setBooked] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      background: 'var(--surface-page)',
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      padding: '14px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      borderBottom: '1px solid var(--border-card)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('home'),
    style: {
      border: 'none',
      background: 'var(--surface-page)',
      width: 36,
      height: 36,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, Img(ICON + 'back-button.svg', 14)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 18
    }
  }, "Load details"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    style: {
      marginLeft: 'auto'
    }
  }, "Verified")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 12,
      border: '1px solid var(--border-card)',
      boxShadow: 'var(--shadow-card)',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement(RouteLadder, {
    headingSize: "22px",
    stops: [{
      heading: l.stops[0].heading,
      subHeading: 'Loading · Today, before 6 PM',
      type: 'LOADING'
    }, {
      heading: l.stops[1].heading,
      subHeading: 'Unloading · Within 2 days',
      type: 'UNLOADING'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-divider)',
      margin: '16px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [[ICON + 'truck-filled.svg', l.details[0].text], [ICON + 'box-seam.svg', l.details[1].text], [ICON + 'rupee.svg', 'Advance 40% · Balance on POD']].map(([ic, tx], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      fontSize: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      display: 'inline-flex'
    }
  }, Img(ic, 24)), tx)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 12,
      border: '1px solid var(--border-card)',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 14
    }
  }, "Loading Manager"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 16
    }
  }, "Ramesh Traders")), /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      border: '1px solid var(--border-input)',
      borderRadius: 12,
      padding: '10px 16px',
      background: '#fff',
      fontWeight: 600,
      fontFamily: 'var(--font-display)',
      cursor: 'pointer'
    }
  }, Img(ICON + 'call-black.svg', 18), " Call"))), /*#__PURE__*/React.createElement(PremiumPill, null, "Top bid on this lane is \u20B952,000 \u2014 bid higher to win")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      background: '#fff',
      borderTop: '1px solid var(--border-card)',
      boxShadow: 'var(--shadow-footer)',
      padding: 16,
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--color-primary)',
      fontWeight: 500,
      fontSize: 14
    }
  }, l.fareLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 24,
      lineHeight: 1.1
    }
  }, l.fare)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: booked ? 'outlined' : 'solid',
    onClick: () => setBooked(true)
  }, booked ? 'Booked ✓' : 'Book this load'))));
}

/* ===================================================================
   WELCOME / ONBOARDING SCREEN
   =================================================================== */
function WelcomeScreen({
  go
}) {
  const [sel, setSel] = React.useState('32ft MXL');
  const vehicles = ['Tata Ace', '14ft', '19ft', '22ft', '32ft SXL', '32ft MXL'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--we-yellow-hero)',
      padding: '20px 20px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 16
    }
  }, Img(LOGO + 'wheelseye-mark.svg', 44)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontWeight: 700,
      fontSize: 28,
      lineHeight: 1.35,
      color: 'var(--we-violet-deep)'
    }
  }, "Find loads for", /*#__PURE__*/React.createElement("br", null), "your truck, daily"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'rgba(36,19,67,0.25)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: 13,
      color: '#241343'
    }
  }, "\u2605 100% Payment guarantee \u2605"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'rgba(36,19,67,0.25)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 28,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#3e7039',
      fontWeight: 700,
      fontSize: 18
    }
  }, "12,000+"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12
    }
  }, "loads daily")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#3e7039',
      fontWeight: 700,
      fontSize: 18
    }
  }, "800+"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12
    }
  }, "routes")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: '20px 20px 0 0',
      marginTop: -20,
      padding: '24px 16px 0',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      marginBottom: 14
    }
  }, "Select your vehicle type"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10
    }
  }, vehicles.map(v => /*#__PURE__*/React.createElement(FilterChip, {
    key: v,
    selected: sel === v,
    onClick: () => setSel(v)
  }, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      background: 'var(--surface-page)',
      borderRadius: 12,
      padding: 16,
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, Img(ILLO + 'demo-truck.svg', 48), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-caption)'
    }
  }, "We'll match you with loads for a ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-body)'
    }
  }, sel), " on your routes."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      bottom: 0,
      background: '#fff',
      borderTop: '1px solid rgba(0,0,0,0.06)',
      boxShadow: 'var(--shadow-footer)',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "solid",
    onClick: () => go('home')
  }, "Continue")));
}

/* ===================================================================
   APP SHELL — phone frame + bottom nav + routing
   =================================================================== */
function App() {
  const [screen, setScreen] = React.useState('welcome');
  const [load, setLoad] = React.useState(null);
  const [nav, setNav] = React.useState('loads');
  const go = (s, payload) => {
    if (payload) setLoad(payload);
    setScreen(s);
    window.scrollTo && null;
  };
  const showNav = screen === 'home';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 800,
      background: '#fff',
      borderRadius: 36,
      overflow: 'hidden',
      position: 'relative',
      boxShadow: '0 30px 80px rgba(0,0,0,0.28)',
      border: '10px solid #111',
      fontFamily: 'var(--font-display)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 36,
      background: screen === 'home' ? 'var(--surface-header)' : screen === 'welcome' ? 'var(--we-yellow-hero)' : '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      fontSize: 13,
      fontWeight: 600,
      color: screen === 'home' ? '#fff' : '#000'
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", null, "WheelsEye")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 36,
      left: 0,
      right: 0,
      bottom: showNav ? 64 : 0,
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch'
    }
  }, screen === 'welcome' && /*#__PURE__*/React.createElement(WelcomeScreen, {
    go: go
  }), screen === 'home' && /*#__PURE__*/React.createElement(HomeScreen, {
    go: go
  }), screen === 'detail' && /*#__PURE__*/React.createElement(LoadDetailScreen, {
    go: go,
    load: load
  })), showNav && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 64
    }
  }, /*#__PURE__*/React.createElement(BottomNav, {
    active: nav,
    onChange: setNav,
    items: [{
      id: 'loads',
      label: 'Loads',
      icon: Img(ICON + 'truck-outlined.svg', 24),
      activeIcon: Img(ICON + 'truck-filled.svg', 24)
    }, {
      id: 'lanes',
      label: 'Lanes',
      icon: Img(ICON + 'lanes-outlined.svg', 24),
      activeIcon: Img(ICON + 'lanes-filled.svg', 24)
    }, {
      id: 'help',
      label: 'Help',
      icon: Img(ICON + 'help-outlined.svg', 24),
      activeIcon: Img(ICON + 'help-filled.svg', 24)
    }, {
      id: 'home',
      label: 'Profile',
      icon: Img(ICON + 'home-outlined.svg', 24),
      activeIcon: Img(ICON + 'home-filled.svg', 24)
    }]
  })));
}
window.WheelsEyeApp = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/loads-app/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/loads-listing/screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* WheelsEye Loads — production listing + load-detail recreation.
   Listing composes the DS LoadListCard; detail rebuilds LoadAddress, VehicleDetails,
   Offer, the sticky freight input and the leaderboard exactly as shipped. */
const DS = window.WheelsEyeLoadsDesignSystem_985cfc;
const {
  LoadListCard,
  SegmentedTabs,
  FilterChip,
  ToggleSwitch,
  Button
} = DS;
const A = '../../assets/icons/loads/';
const IC = '../../assets/icons/';
const LOGO = '../../assets/logos/';
const img = (src, w, h) => /*#__PURE__*/React.createElement("img", {
  src: src,
  width: w,
  height: h || w,
  alt: "",
  style: {
    display: 'block'
  }
});

/* ---------------- sample loads (shaped like production LoadData) ---------------- */
const ADDR = (a, b, c, d) => [{
  type: 'LOADING',
  heading: a,
  subHeading: b
}, {
  type: 'UNLOADING',
  heading: c,
  subHeading: d
}];
const ITEMS = (truck, tonnage) => [{
  iconSrc: A + 'truck-type.svg',
  desc: truck
}, {
  iconSrc: A + 'measurement.svg',
  desc: tonnage
}];
const ALL_LOADS = [{
  id: 1,
  headerWidget: {
    iconSrc: A + 'clock.svg',
    text: 'Closes in <b>04:32</b> min'
  },
  addresses: ADDR('Jaipur, Rajasthan', 'Sitapura Industrial Area', 'Surat, Gujarat', 'Sachin GIDC'),
  items: [...ITEMS('32 ft Multi-axle · Full load', '21 Tonnes · Cement'), {
    iconSrc: A + 'magic.svg',
    desc: 'Earn 12% more on this lane',
    color: 'GREEN'
  }],
  footer: {
    variant: 'quote',
    color: 'OK',
    desc: 'Expected price',
    amount: '₹48,000',
    buttonDesc: 'Send Quote'
  }
}, {
  id: 2,
  headerWidget: {
    iconSrc: A + 'verified.svg',
    text: 'Verified shipper'
  },
  addresses: ADDR('Delhi', 'Narela Industrial Area', 'Mumbai, Maharashtra', 'Bhiwandi'),
  items: ITEMS('22 ft Open body · Part load', '9 Tonnes · Steel coils'),
  footer: {
    variant: 'accept',
    buttonDesc: 'Accept Load'
  }
}, {
  id: 3,
  stickyWidget: {
    iconSrc: A + 'thunder.svg',
    desc: 'Bid higher to win this load'
  },
  addresses: ADDR('Ahmedabad, Gujarat', 'Vatva GIDC', 'Pune, Maharashtra', 'Chakan MIDC'),
  items: ITEMS('19 ft Container · Full load', '7 Tonnes · FMCG goods'),
  footer: {
    variant: 'bidding',
    desc: 'Bidding closes in 02:00 min',
    buttonDesc: 'Place Bid',
    rejectDesc: 'Not interested'
  }
}, {
  id: 4,
  addresses: ADDR('Nagpur, Maharashtra', 'MIHAN', 'Hyderabad, Telangana', 'Patancheru'),
  items: ITEMS('32 ft Single-axle · Full load', '16 Tonnes · Tiles'),
  footer: {
    variant: 'quote',
    color: 'RED',
    desc: 'Reduce your freight to win',
    amount: '₹39,500',
    buttonDesc: 'Reduce'
  }
}];
const VEHICLE_LOADS = [{
  id: 11,
  headerWidget: {
    iconSrc: A + 'clock.svg',
    text: 'Closes in <b>09:10</b> min'
  },
  addresses: ADDR('Ludhiana, Punjab', 'Focal Point', 'Delhi', 'Okhla'),
  items: [...ITEMS('32 ft Multi-axle · Full load', '24 Tonnes · Auto parts'), {
    iconSrc: A + 'magic.svg',
    desc: 'Best match for your truck',
    color: 'GREEN'
  }],
  footer: {
    variant: 'confirm',
    desc: 'Pay token to confirm',
    amount: '₹2,000',
    buttonDesc: 'Confirm Load'
  }
}, {
  id: 12,
  addresses: ADDR('Chandigarh', 'Industrial Area Ph 2', 'Jaipur, Rajasthan', 'Vishwakarma'),
  items: ITEMS('32 ft Multi-axle · Full load', '20 Tonnes · Packaged food'),
  footer: {
    variant: 'quote',
    color: 'OK',
    desc: 'Expected price',
    amount: '₹41,000',
    buttonDesc: 'Send Quote'
  }
}, {
  id: 13,
  stickyWidget: {
    iconSrc: A + 'thunder.svg',
    desc: 'You are #2 — bid higher'
  },
  addresses: ADDR('Ambala, Haryana', 'Industrial Estate', 'Lucknow, UP', 'Transport Nagar'),
  items: ITEMS('32 ft Multi-axle · Full load', '25 Tonnes · Cement'),
  footer: {
    variant: 'bidding',
    desc: 'Bidding closes in 01:30 min',
    buttonDesc: 'Place Bid'
  }
}];

/* ===================================================================
   GREEN APP HEADER
   =================================================================== */
function AppHeader({
  vehicle
}) {
  const [alert, setAlert] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-header)',
      padding: '14px 16px 30px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: '50%',
      width: 38,
      height: 38,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-fab)'
    }
  }, img(LOGO + 'wheelseye-mark.svg', 26)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontWeight: 700,
      fontSize: 16,
      lineHeight: 1.2
    }
  }, vehicle ? vehicle.number : 'WheelsEye Loads'), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'rgba(255,255,255,0.82)',
      fontSize: 12
    }
  }, vehicle ? vehicle.type : 'Find loads for your truck'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: '50%',
      width: 32,
      height: 32,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, img(IC + 'language.svg', 18)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      background: 'rgba(255,255,255,0.14)',
      borderRadius: 999,
      padding: '5px 8px 5px 10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff',
      fontSize: 12,
      fontWeight: 500
    }
  }, "Alerts"), /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: alert,
    onChange: setAlert
  })))));
}

/* ===================================================================
   LISTING SCREEN — All Loads + Vehicle-anchored
   =================================================================== */
const VEHICLE = {
  number: 'HR55 AB 1234',
  type: '32 ft Multi-axle · MXL'
};
const VT_FILTERS = ['All', 'Open body', 'Container', 'Trailer', 'Tanker'];
function ListingScreen({
  mode,
  setMode,
  go
}) {
  const [tab, setTab] = React.useState('new');
  const [vt, setVt] = React.useState('All');
  const anchored = mode === 'vehicle';
  const loads = anchored ? VEHICLE_LOADS : ALL_LOADS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(AppHeader, {
    vehicle: anchored ? VEHICLE : null
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: '24px 24px 0 0',
      marginTop: -18,
      position: 'relative',
      paddingTop: 14,
      minHeight: 480
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px 12px'
    }
  }, /*#__PURE__*/React.createElement(SegmentedTabs, {
    tabs: [{
      id: 'all',
      label: 'All Loads'
    }, {
      id: 'vehicle',
      label: 'My Vehicle'
    }],
    active: mode,
    onChange: setMode
  })), anchored && /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 16px 12px',
      padding: '12px 14px',
      background: 'var(--surface-page)',
      borderRadius: 12,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, img(IC + 'truck-filled.svg', 26), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15
    }
  }, VEHICLE.number), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "Showing loads matched to this truck")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-link)',
      fontWeight: 600
    }
  }, "Change")), !anchored && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px'
    }
  }, /*#__PURE__*/React.createElement(SegmentedTabs, {
    tabs: [{
      id: 'new',
      label: 'New Loads'
    }, {
      id: 'mine',
      label: 'My Loads'
    }],
    active: tab,
    onChange: setTab
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      overflowX: 'auto',
      padding: '14px 16px',
      scrollbarWidth: 'none'
    }
  }, VT_FILTERS.map(t => /*#__PURE__*/React.createElement(FilterChip, {
    key: t,
    selected: vt === t,
    onClick: () => setVt(t)
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      padding: anchored ? '4px 16px 28px' : '0 16px 28px'
    }
  }, loads.map(l => /*#__PURE__*/React.createElement(LoadListCard, _extends({
    key: l.id
  }, l, {
    onClick: () => go('detail', l),
    footer: {
      ...l.footer,
      onAction: () => go('detail', l),
      onReject: () => {}
    }
  }))))));
}

/* ===================================================================
   LOAD DETAIL — back header, address, vehicle details, offer, freight input, leaderboard
   =================================================================== */
const DETAIL_ADDR = [{
  type: 'LOADING',
  heading: 'Jaipur, Rajasthan',
  desc: 'Plot 14, Sitapura Industrial Area, Tonk Road, Jaipur 302022'
}, {
  type: 'UNLOADING',
  heading: 'Surat, Gujarat',
  desc: 'Sachin GIDC, Road 7, Surat 394230'
}];
const DETAIL_ITEMS = [{
  iconSrc: A + 'truck-type.svg',
  desc: '32 ft Multi-axle (MXL)',
  subTags: ['Full load']
}, {
  iconSrc: A + 'measurement.svg',
  desc: '21 Tonnes · Cement bags'
}, {
  iconSrc: A + 'calendar.svg',
  desc: 'Loading today, before 6:00 PM'
}, {
  iconSrc: A + 'express-delivery.svg',
  desc: 'Advance 40% · Balance on POD',
  subTags: ['Fast pay']
}];
const LEADERBOARD = [{
  rank: 1,
  quote: 46000,
  remark: 'Top bid',
  avatar: 'RK'
}, {
  rank: 2,
  quote: 47500,
  remark: '',
  avatar: 'SP'
}, {
  rank: 3,
  quote: 48000,
  remark: '',
  avatar: 'MD'
}];
const RANK_IMG = {
  1: A + 'rank-gold.svg',
  2: A + 'rank-silver.svg',
  3: A + 'rank-orange.svg'
};
function Avatar({
  initials
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: '#f4f5fa',
      color: '#819bbc',
      fontWeight: 600,
      fontSize: 14,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-secondary)',
      flexShrink: 0
    }
  }, initials);
}
function LoadDetailScreen({
  go
}) {
  const [open, setOpen] = React.useState(false);
  const [quote, setQuote] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const visible = open ? LEADERBOARD : LEADERBOARD.slice(0, 3);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      background: 'var(--surface-page)',
      paddingBottom: 260
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 5,
      background: '#fff',
      height: 64,
      padding: '0 18px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0px 3px 4px 0px rgba(202,202,202,0.2)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('list'),
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 4,
      display: 'flex'
    }
  }, img(IC + 'back-button.svg', 15)), /*#__PURE__*/React.createElement("button", {
    style: {
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: '#4a4a52',
      borderRadius: 999,
      padding: '4px 12px 4px 4px'
    }
  }, img(A + 'rm-icon.svg', 28), img(A + 'help-support.svg', 22), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff',
      fontSize: 13,
      fontWeight: 600
    }
  }, "Support"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: '#fff',
      borderRadius: 16,
      boxShadow: 'var(--shadow-card-soft)',
      padding: '16px 16px 16px 38px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, DETAIL_ADDR.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'relative',
      paddingLeft: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 4,
      left: -22,
      width: 12,
      height: 12,
      display: 'flex'
    }
  }, img(a.type === 'LOADING' ? A + 'pickup-location-filled.svg' : A + 'unloading-location-filled.svg', 12)), i !== DETAIL_ADDR.length - 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      borderLeft: '1px dashed #aaa',
      top: 22,
      left: -16.5,
      height: 'calc(100% - 6px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: '24px'
    }
  }, a.heading), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: open ? 100 : 0,
      opacity: open ? 1 : 0,
      overflow: 'hidden',
      transition: 'all 0.3s ease-in-out'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: '22px',
      color: '#888'
    }
  }, a.desc))))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    style: {
      position: 'absolute',
      right: 16,
      top: 16,
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'blue-arrow.svg',
    width: 24,
    height: 24,
    alt: "",
    style: {
      transform: `rotate(${open ? '0deg' : '180deg'})`,
      transition: 'transform 0.3s ease-in-out'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 22,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      margin: 16
    }
  }, DETAIL_ITEMS.map((d, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, img(d.iconSrc, 24), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      lineHeight: '24px',
      fontWeight: 400
    }
  }, d.desc), d.subTags && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 5
    }
  }, d.subTags.map((s, j) => /*#__PURE__*/React.createElement("span", {
    key: j,
    style: {
      background: 'linear-gradient(to right, #F8F5FF, #FFFFFF)',
      borderRadius: 6,
      color: 'var(--we-violet-primary)',
      lineHeight: '22px',
      fontSize: 14,
      fontWeight: 500,
      padding: '6px 12px',
      fontFamily: 'var(--font-secondary)'
    }
  }, s))))), i + 1 < DETAIL_ITEMS.length && /*#__PURE__*/React.createElement("img", {
    src: A + 'horizontal-dashed.svg',
    height: 1,
    alt: "",
    style: {
      width: '100%'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 8,
      borderRadius: '0 0 12px 12px',
      background: 'var(--we-yellow-tint)',
      lineHeight: '22px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--we-red-primary)',
      margin: 3,
      fontSize: 20
    }
  }, "*"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: '16px'
    }
  }, "Tarpaulin (tirpal) required for this load"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(#f8f5ff, #ffffff)',
      padding: '9px 12px',
      display: 'flex',
      gap: 5,
      alignItems: 'center',
      borderRadius: 36,
      width: 'fit-content'
    }
  }, img(A + 'magic.svg', 16), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--we-violet-primary)',
      fontSize: 16,
      fontWeight: 600,
      lineHeight: '22px',
      fontFamily: 'var(--font-secondary)'
    }
  }, "Get \u20B9500 bonus on first trip"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 132,
      background: '#fff',
      padding: 16,
      boxShadow: 'var(--shadow-footer)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      lineHeight: '24px',
      fontWeight: 600
    }
  }, "Your freight"), /*#__PURE__*/React.createElement("input", {
    value: quote,
    onChange: e => setQuote(e.target.value.replace(/[^0-9]/g, '')),
    type: "tel",
    placeholder: "Fill your freight",
    style: {
      padding: '9px 22px',
      borderRadius: 12,
      border: '1px solid #D7D7D7',
      marginTop: 8,
      fontSize: 16,
      fontWeight: 500,
      lineHeight: '24px',
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-display)',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "solid",
    onClick: () => setSubmitted(true)
  }, submitted ? 'Quote sent ✓' : 'Submit'))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      background: '#fff',
      boxShadow: '0px -2px 40px 0px rgba(0,0,0,0.06)',
      padding: '0 16px 10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 600
    }
  }, "Live leaderboard"), LEADERBOARD.length > 3 && /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => o),
    style: {
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      background: '#FFF6EC',
      borderRadius: 6,
      padding: '3px 6px',
      cursor: 'pointer'
    }
  }, img(A + 'expand.svg', 20), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 12,
      lineHeight: '16px',
      color: '#F29422'
    }
  }, "See leaderboard"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, visible.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: l.rank,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 26,
      padding: '12px 0',
      borderBottom: i < visible.length - 1 ? '1px dashed #ebedf1' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      textAlign: 'center'
    }
  }, RANK_IMG[l.rank] ? img(RANK_IMG[l.rank], 20) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: '#444',
      fontFamily: 'var(--font-secondary)'
    }
  }, l.rank)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: l.avatar
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 500,
      filter: submitted ? 'none' : 'blur(3.5px)'
    }
  }, "\u20B9", l.quote.toLocaleString('en-IN'))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 400,
      color: '#888'
    }
  }, l.remark || '-')))))));
}

/* ===================================================================
   APP SHELL — phone frame + routing
   =================================================================== */
function App() {
  const [screen, setScreen] = React.useState('list');
  const [mode, setMode] = React.useState('all');
  const go = s => setScreen(s);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 820,
      background: '#fff',
      borderRadius: 36,
      overflow: 'hidden',
      position: 'relative',
      boxShadow: '0 30px 80px rgba(0,0,0,0.28)',
      border: '10px solid #111',
      fontFamily: 'var(--font-display)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 36,
      background: screen === 'list' ? 'var(--surface-header)' : '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      fontSize: 13,
      fontWeight: 600,
      color: screen === 'list' ? '#fff' : '#000'
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", null, "WheelsEye")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 36,
      left: 0,
      right: 0,
      bottom: 0,
      overflowY: 'auto'
    }
  }, screen === 'list' ? /*#__PURE__*/React.createElement(ListingScreen, {
    mode: mode,
    setMode: setMode,
    go: go
  }) : /*#__PURE__*/React.createElement(LoadDetailScreen, {
    go: go
  })));
}
window.WheelsEyeLoadsKit = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/loads-listing/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rewards-milestone/shared.jsx
try { (() => {
/* ===================================================================
   WheelsEye Loads — Activation Rewards (milestone flow)
   Shared data, strings (Hindi/Devanagari), confetti, and section blocks.
   Amount + copy are tweak-driven via RewardCtx. Exposed on window.WERewards.
   =================================================================== */
const DSr = window.WheelsEyeLoadsDesignSystem_985cfc;
const {
  Button
} = DSr;
const RA = '../../assets/icons/';
const RI = '../../assets/illustrations/';
const RL = '../../assets/logos/';
const inr = n => '₹' + Number(n || 0).toLocaleString('en-IN');
const TRIP_LABELS = ['पहली ट्रिप', 'दूसरी ट्रिप', 'तीसरी ट्रिप'];

/* tripsDone: 0 (fresh) | 1 (mid) | 3 (done) */
const stateMeta = {
  fresh: {
    tripsDone: 0,
    label: 'नई शुरुआत'
  },
  mid: {
    tripsDone: 1,
    label: '1 ट्रिप पूरी'
  },
  done: {
    tripsDone: 3,
    label: 'सभी पूरी 🎉'
  }
};

/* ---- tweakable config, supplied by the App via context ---- */
const DEFAULT_CFG = {
  amounts: [500, 1000, 2000],
  amountStyle: 'pop',
  // pop | shine | glow | plain
  amountScale: 1,
  headline: '3 ट्रिप पूरी करें और',
  suffix: 'तक कमाएं',
  ctaLabel: 'लोड खोजें',
  deadlineDays: 30,
  confettiAlways: false
};
const RewardCtx = React.createContext(DEFAULT_CFG);
const useCfg = () => React.useContext(RewardCtx) || DEFAULT_CFG;
const milestonesFrom = cfg => cfg.amounts.map((a, i) => ({
  id: i + 1,
  trip: TRIP_LABELS[i],
  amount: a
}));
const totalFrom = cfg => cfg.amounts.reduce((s, a) => s + Number(a || 0), 0);
const earnedFrom = (cfg, tripsDone) => cfg.amounts.slice(0, tripsDone).reduce((s, a) => s + Number(a || 0), 0);
const daysLeftFrom = (cfg, tripsDone) => tripsDone >= 3 ? 0 : tripsDone === 1 ? Math.max(1, Math.round(cfg.deadlineDays * 0.6)) : cfg.deadlineDays;
const hexA = (hex, a) => {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
  return `rgba(${n >> 16 & 255},${n >> 8 & 255},${n & 255},${a})`;
};

/* ===================================================================
   BIG AMOUNT — the "catchy" headline number, 4 treatments
   =================================================================== */
function BigAmount({
  value,
  color,
  stroke,
  base = 34,
  effect = 'pop',
  scale = 1
}) {
  const size = Math.round(base * scale);
  const common = {
    fontWeight: 800,
    lineHeight: 1.04,
    fontSize: size,
    display: 'inline-block',
    letterSpacing: '.3px',
    fontFamily: 'var(--font-display)'
  };
  if (effect === 'shine') {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        ...common,
        backgroundImage: 'linear-gradient(95deg,#FFE9A8 0%,#FFC107 42%,#FF9D2E 52%,#FFE9A8 100%)',
        backgroundSize: '220% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
        animation: 'amount-shine 2.6s linear infinite',
        filter: 'drop-shadow(0 2px 1px rgba(0,0,0,0.22))'
      }
    }, value);
  }
  if (effect === 'glow') {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        ...common,
        color,
        textShadow: `0 0 10px ${hexA(color, 0.85)}, 0 0 24px ${hexA(color, 0.5)}`,
        animation: 'amount-glow 1.8s ease-in-out infinite'
      }
    }, value);
  }
  if (effect === 'plain') {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        ...common,
        color
      }
    }, value);
  }
  // pop — stroke + stacked shadow (default, very catchy)
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...common,
      color,
      WebkitTextStroke: `1px ${stroke || 'rgba(0,0,0,0.25)'}`,
      textShadow: '0 2px 0 rgba(0,0,0,0.18), 0 5px 10px rgba(0,0,0,0.20)'
    }
  }, value);
}

/* Headline block reused by every variation header */
function RewardHeadline({
  color,
  stroke,
  base = 34
}) {
  const cfg = useCfg();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: hexA(color, 0.92),
      marginBottom: 2
    }
  }, cfg.headline), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'center',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(BigAmount, {
    value: inr(totalFrom(cfg)),
    color: color,
    stroke: stroke,
    base: base,
    effect: cfg.amountStyle,
    scale: cfg.amountScale
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: Math.round(16 * cfg.amountScale),
      fontWeight: 700,
      color
    }
  }, cfg.suffix)));
}

/* ===================================================================
   CONFETTI — brand-colored burst
   =================================================================== */
const CONFETTI_COLORS = ['#2EA750', '#F7C145', '#0066FF', '#D33636', '#734FEA', '#ED6D26'];
function Confetti({
  active,
  count = 44
}) {
  const pieces = React.useMemo(() => Array.from({
    length: count
  }).map((_, i) => ({
    left: Math.random() * 100,
    delay: Math.random() * 0.6,
    dur: 1.6 + Math.random() * 1.4,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    size: 6 + Math.random() * 6,
    round: Math.random() > 0.5,
    rot: Math.random() * 360
  })), [count]);
  if (!active) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 30
    }
  }, pieces.map((p, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: 'absolute',
      top: -16,
      left: p.left + '%',
      width: p.size,
      height: p.size * (p.round ? 1 : 1.6),
      background: p.color,
      borderRadius: p.round ? '50%' : '2px',
      transform: `rotate(${p.rot}deg)`,
      animation: `confetti-fall ${p.dur}s ${p.delay}s linear infinite`
    }
  })));
}

/* ===================================================================
   Small shared pieces
   =================================================================== */
function DeadlineBadge({
  tripsDone
}) {
  const cfg = useCfg();
  const d = daysLeftFrom(cfg, tripsDone);
  if (d === 0) return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'var(--we-green-tint)',
      color: 'var(--we-green-600)',
      fontWeight: 600,
      fontSize: 13,
      lineHeight: '20px',
      padding: '5px 12px',
      borderRadius: 999
    }
  }, "\u0938\u092D\u0940 \u0907\u0928\u093E\u092E \u092E\u093F\u0932 \u0917\u090F");
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'rgba(255,255,255,0.18)',
      color: '#fff',
      fontWeight: 600,
      fontSize: 13,
      lineHeight: '20px',
      padding: '5px 12px',
      borderRadius: 999,
      backdropFilter: 'blur(2px)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: RA + 'loads/clock-gold.svg',
    width: 15,
    height: 15,
    alt: ""
  }), "\u0911\u092B\u0930 \u0916\u0924\u094D\u092E \u0939\u094B\u0928\u0947 \u092E\u0947\u0902 ", d, " \u0926\u093F\u0928 \u092C\u093E\u0915\u0940");
}
function SectionTitle({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      lineHeight: '24px',
      color: 'var(--we-ink)',
      marginBottom: 12,
      ...style
    }
  }, children);
}
function Card({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--we-border)',
      borderRadius: 16,
      boxShadow: 'var(--shadow-card)',
      padding: 16,
      ...style
    }
  }, children);
}

/* Earnings summary — total credited so far vs the full reward */
function EarningsSummary({
  tripsDone
}) {
  const cfg = useCfg();
  const total = totalFrom(cfg);
  const got = earnedFrom(cfg, tripsDone);
  const pct = total ? Math.round(got / total * 100) : 0;
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--we-gray-500)',
      fontWeight: 500
    }
  }, "\u0905\u092C \u0924\u0915 \u0915\u092E\u093E\u092F\u093E"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 700,
      color: 'var(--we-green-600)',
      lineHeight: '32px'
    }
  }, inr(got))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--we-gray-500)',
      fontWeight: 500
    }
  }, "\u0915\u0941\u0932 \u0907\u0928\u093E\u092E"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      color: 'var(--we-ink)'
    }
  }, inr(total)))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: 'var(--we-surface)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      width: pct + '%',
      background: 'linear-gradient(90deg,#2EA750,#62B146)',
      transition: 'width .6s ease'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: RA + 'wallet.svg',
    width: 18,
    height: 18,
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--we-gray-600)'
    }
  }, "\u0907\u0928\u093E\u092E \u0938\u0940\u0927\u0947 \u0906\u092A\u0915\u0947 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--we-ink)'
    }
  }, "\u0935\u094D\u0939\u0940\u0932\u0938\u093E\u0908 \u0935\u0949\u0932\u0947\u091F"), " \u092E\u0947\u0902 \u0906\u090F\u0917\u093E")));
}

/* How it works — 3 step explainer */
const STEPS = [{
  icon: RA + 'loads/truck-type.svg',
  title: 'कोई भी लोड बुक करें',
  desc: 'व्हीलसाई पर अपनी पसंद की लोड चुनें'
}, {
  icon: RA + 'loads/trip.svg',
  title: 'ट्रिप पूरी करें',
  desc: 'माल पहुंचाएं और POD जमा करें'
}, {
  icon: RA + 'wallet.svg',
  title: 'कैशबैक पाएं',
  desc: '24 घंटे में वॉलेट में इनाम पाएं'
}];
function HowItWorks() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, null, "\u0915\u0948\u0938\u0947 \u0915\u093E\u092E \u0915\u0930\u0924\u093E \u0939\u0948"), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }
  }, STEPS.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      alignSelf: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--we-green-tint)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: s.icon,
    width: 22,
    height: 22,
    alt: ""
  })), i < STEPS.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      width: 2,
      background: 'var(--we-border)',
      margin: '4px 0'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: i < STEPS.length - 1 ? 18 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--we-ink)'
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--we-gray-500)',
      marginTop: 2
    }
  }, s.desc)))))));
}

/* Referral nudge */
function ReferralCard() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(105deg,#F3ECFF,#FFFFFF)',
      border: '1px solid #ECE3FF',
      borderRadius: 16,
      padding: 16,
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: '50%',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 2px 8px rgba(115,79,234,0.18)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: RA + 'loads/person.svg',
    width: 26,
    height: 26,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--we-violet-deep)'
    }
  }, "\u0926\u094B\u0938\u094D\u0924 \u0915\u094B \u092C\u0941\u0932\u093E\u090F\u0902, ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--we-violet-primary)'
    }
  }, "\u20B91,000"), " \u0914\u0930 \u0915\u092E\u093E\u090F\u0902"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--we-gray-500)',
      marginTop: 2
    }
  }, "\u0939\u0930 \u091F\u094D\u0930\u0915 \u092E\u093E\u0932\u093F\u0915 \u0915\u0947 \u091C\u0941\u0921\u093C\u0928\u0947 \u092A\u0930 \u092C\u094B\u0928\u0938")), /*#__PURE__*/React.createElement("img", {
    src: RA + 'chevron-right.svg',
    width: 18,
    height: 18,
    alt: "",
    style: {
      opacity: 0.5
    }
  }));
}

/* FAQ accordion — total/deadline interpolated from cfg */
function FaqAccordion() {
  const cfg = useCfg();
  const total = totalFrom(cfg);
  const FAQS = [{
    q: 'कैशबैक कब मिलेगा?',
    a: 'ट्रिप पूरी होने और POD जमा करने के 24 घंटे के अंदर कैशबैक आपके व्हीलसाई वॉलेट में आ जाएगा।'
  }, {
    q: 'क्या तीनों ट्रिप 1 महीने में करनी ज़रूरी हैं?',
    a: `हाँ, ऑफर शुरू होने की तारीख से ${cfg.deadlineDays} दिन के अंदर तीनों ट्रिप पूरी करनी होंगी, तभी पूरा ${inr(total)} इनाम मिलेगा।`
  }, {
    q: 'कैशबैक का इस्तेमाल कहाँ कर सकते हैं?',
    a: 'वॉलेट कैशबैक का इस्तेमाल टोकन भरने और प्लेटफॉर्म फीस देने में कर सकते हैं।'
  }, {
    q: 'किन लोड पर ट्रिप गिनी जाएगी?',
    a: 'व्हीलसाई पर बुक की गई कोई भी कन्फर्म लोड, जिसकी ट्रिप पूरी हो, इस ऑफर में गिनी जाएगी।'
  }];
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, null, "\u0905\u0915\u094D\u0938\u0930 \u092A\u0942\u091B\u0947 \u091C\u093E\u0928\u0947 \u0935\u093E\u0932\u0947 \u0938\u0935\u093E\u0932"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, FAQS.map((f, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: '#fff',
        border: '1px solid var(--we-border)',
        borderRadius: 12,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: '100%',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        padding: '14px 14px',
        textAlign: 'left',
        fontFamily: 'var(--font-display)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--we-ink)'
      }
    }, f.q), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 20,
        color: 'var(--we-green-primary)',
        transform: isOpen ? 'rotate(45deg)' : 'none',
        transition: 'transform .2s',
        flexShrink: 0,
        lineHeight: 1
      }
    }, "+")), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: isOpen ? 200 : 0,
        opacity: isOpen ? 1 : 0,
        overflow: 'hidden',
        transition: 'all .28s ease'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 14px 14px',
        fontSize: 13,
        lineHeight: '20px',
        color: 'var(--we-gray-600)'
      }
    }, f.a)));
  })));
}

/* Terms & conditions */
function TermsCard() {
  const cfg = useCfg();
  const TERMS = [`ऑफर शुरू होने की तारीख से ${cfg.deadlineDays} दिन तक मान्य है।`, 'सिर्फ व्हीलसाई पर बुक की गई कन्फर्म लोड की पूरी ट्रिप गिनी जाएगी।', 'इनाम व्हीलसाई वॉलेट में कैशबैक के रूप में दिया जाएगा।', 'किसी भी विवाद की स्थिति में व्हीलसाई का फैसला अंतिम होगा।'];
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--we-border)',
      borderRadius: 12,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    style: {
      width: '100%',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px',
      fontFamily: 'var(--font-display)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--we-gray-600)'
    }
  }, "\u0928\u093F\u092F\u092E \u0935 \u0936\u0930\u094D\u0924\u0947\u0902"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      color: 'var(--we-gray-500)',
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform .2s'
    }
  }, "\u2304")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: open ? 240 : 0,
      overflow: 'hidden',
      transition: 'max-height .3s ease'
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: '0 14px 14px 30px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, TERMS.map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontSize: 12.5,
      lineHeight: '18px',
      color: 'var(--we-gray-500)'
    }
  }, t)))));
}

/* sticky footer CTA */
function FooterCTA({
  tripsDone
}) {
  const cfg = useCfg();
  const done = tripsDone >= 3;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      bottom: 0,
      background: '#fff',
      borderTop: '1px solid var(--we-border)',
      boxShadow: 'var(--shadow-footer)',
      padding: 14,
      zIndex: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "solid"
  }, done ? 'और कमाएं — नई लोड खोजें' : cfg.ctaLabel));
}
window.WERewards = {
  RA,
  RI,
  RL,
  inr,
  stateMeta,
  TRIP_LABELS,
  DEFAULT_CFG,
  RewardCtx,
  useCfg,
  milestonesFrom,
  totalFrom,
  earnedFrom,
  daysLeftFrom,
  hexA,
  BigAmount,
  RewardHeadline,
  Confetti,
  DeadlineBadge,
  SectionTitle,
  Card,
  EarningsSummary,
  HowItWorks,
  ReferralCard,
  FaqAccordion,
  TermsCard,
  FooterCTA,
  Button
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rewards-milestone/shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rewards-milestone/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rewards-milestone/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rewards-milestone/variations.jsx
try { (() => {
/* ===================================================================
   WheelsEye Loads — Activation Rewards: 3 gamification directions
   V1 Winding road · V2 Reward ladder · V3 Treasure trail
   Shared sections + config come from window.WERewards.
   Reward data is config-driven (RewardCtx): each section reads useCfg()
   so the Tweaks panel can retune amounts, copy, deadline and effects live.
   =================================================================== */
const R = window.WERewards;
const {
  RA,
  RI,
  RL,
  inr,
  stateMeta,
  milestonesFrom,
  totalFrom,
  earnedFrom,
  daysLeftFrom,
  useCfg,
  RewardCtx,
  DEFAULT_CFG,
  BigAmount,
  Confetti,
  DeadlineBadge,
  SectionTitle,
  Card,
  EarningsSummary,
  HowItWorks,
  ReferralCard,
  FaqAccordion,
  TermsCard,
  FooterCTA,
  Button
} = R;
const statusOf = (id, done) => id <= done ? 'done' : id === done + 1 ? 'active' : 'locked';
const TRUCK = RI + 'demo-truck.svg';

/* headline number block reused by every variation header — reads cfg so the
   Tweaks panel's amount tier / style / scale / copy flow through. */
function HeaderHeadline({
  subColor,
  amtColor,
  stroke,
  sub,
  base = 34
}) {
  const cfg = useCfg();
  const TOTAL = totalFrom(cfg);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: subColor
    }
  }, sub ?? cfg.headline), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'center',
      gap: 8,
      flexWrap: 'wrap',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(BigAmount, {
    value: inr(TOTAL),
    color: amtColor,
    stroke: stroke,
    base: base,
    effect: cfg.amountStyle,
    scale: cfg.amountScale
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: Math.round(18 * cfg.amountScale),
      fontWeight: 700,
      color: amtColor
    }
  }, cfg.suffix)));
}

/* shared back header strip (inside each screen, above the hero) */
function TopBar({
  dark
}) {
  const col = dark ? '#fff' : 'var(--we-ink)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: dark ? 'rgba(255,255,255,0.18)' : 'var(--we-surface)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: RA + 'back-button.svg',
    width: 14,
    height: 14,
    alt: "",
    style: {
      filter: dark ? 'brightness(0) invert(1)' : 'none'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: col
    }
  }, "\u0907\u0928\u093E\u092E"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: dark ? 'rgba(255,255,255,0.18)' : 'var(--we-surface)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: RA + 'help-outlined.svg',
    width: 18,
    height: 18,
    alt: "",
    style: {
      filter: dark ? 'brightness(0) invert(1)' : 'none'
    }
  })));
}

/* generic assembly: header + journey + shared sections + sticky footer + confetti */
function RewardScreen({
  tripsDone,
  header,
  journey,
  bg = 'var(--we-surface)'
}) {
  const cfg = useCfg();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: '100%',
      background: bg,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Confetti, {
    active: tripsDone >= 3 || cfg.confettiAlways
  }), header, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '0 16px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      marginTop: 16
    }
  }, journey, /*#__PURE__*/React.createElement(EarningsSummary, {
    tripsDone: tripsDone
  }), /*#__PURE__*/React.createElement(HowItWorks, null), /*#__PURE__*/React.createElement(ReferralCard, null), /*#__PURE__*/React.createElement(FaqAccordion, null), /*#__PURE__*/React.createElement(TermsCard, null)), /*#__PURE__*/React.createElement(FooterCTA, {
    tripsDone: tripsDone
  }));
}

/* ===================================================================
   VARIATION 1 — सफर : winding road, truck climbs to the prize
   =================================================================== */
function RoadHeader({
  tripsDone
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'radial-gradient(120% 90% at 50% 0%, #3C8F4E 0%, #2F663C 70%)',
      padding: '0 0 26px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    dark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '4px 20px 0'
    }
  }, /*#__PURE__*/React.createElement(HeaderHeadline, {
    subColor: "#CFEBD3",
    amtColor: "#FFD24A",
    stroke: "rgba(0,0,0,0.25)",
    base: 34
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(DeadlineBadge, {
    tripsDone: tripsDone
  }))));
}
function RoadJourney({
  tripsDone
}) {
  const cfg = useCfg();
  const MILESTONES = milestonesFrom(cfg);
  /* node + truck coords in a 320×540 space */
  const nodes = [{
    id: 3,
    x: 160,
    y: 64,
    side: 'left'
  }, {
    id: 2,
    x: 160,
    y: 210,
    side: 'right'
  }, {
    id: 1,
    x: 160,
    y: 356,
    side: 'left'
  }];
  const truckY = tripsDone >= 3 ? 92 : tripsDone === 1 ? 285 : 452;
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: '8px 0 0',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 320,
      height: 540,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "320",
    height: "540",
    viewBox: "0 0 320 540",
    fill: "none",
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M160 520 C 60 470 60 400 160 360 C 260 320 260 250 160 210 C 60 170 60 100 160 64",
    stroke: "#E4E7EE",
    strokeWidth: "34",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M160 520 C 60 470 60 400 160 360 C 260 320 260 250 160 210 C 60 170 60 100 160 64",
    stroke: "#FFC93C",
    strokeWidth: "2.5",
    strokeDasharray: "9 11",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: 6,
      transform: 'translateX(-50%)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: 'var(--we-yellow-text)',
      background: 'var(--we-yellow-tint)',
      borderRadius: 999,
      padding: '3px 10px',
      display: 'inline-block'
    }
  }, "\u0917\u094D\u0930\u0948\u0902\u0921 \u0907\u0928\u093E\u092E")), nodes.map(n => {
    const m = MILESTONES.find(x => x.id === n.id);
    const st = statusOf(n.id, tripsDone);
    const c = st === 'done' ? '#2EA750' : st === 'active' ? '#F7C145' : '#C9CED9';
    const labelLeft = n.side === 'left';
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: n.id
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: n.x,
        top: n.y,
        transform: 'translate(-50%,-50%)',
        width: 54,
        height: 54,
        borderRadius: '50%',
        background: '#fff',
        border: `4px solid ${c}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: st === 'active' ? '0 0 0 6px rgba(247,193,69,0.25)' : '0 2px 6px rgba(0,0,0,0.12)',
        zIndex: 4
      }
    }, st === 'done' ? /*#__PURE__*/React.createElement("img", {
      src: RA + 'right-tick.svg',
      width: 22,
      height: 22,
      alt: ""
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 800,
        color: st === 'active' ? 'var(--we-yellow-text)' : 'var(--we-gray-500)'
      }
    }, n.id)), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: n.y,
        [labelLeft ? 'right' : 'left']: 320 - (labelLeft ? n.x - 36 : 320 - n.x - 36),
        transform: 'translateY(-50%)',
        width: 104,
        textAlign: labelLeft ? 'right' : 'left',
        zIndex: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--we-gray-500)',
        fontWeight: 600
      }
    }, m.trip), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 20,
        fontWeight: 800,
        color: st === 'locked' ? 'var(--we-gray-400)' : 'var(--we-green-600)'
      }
    }, inr(m.amount)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        color: st === 'done' ? 'var(--we-green-600)' : st === 'active' ? 'var(--we-yellow-text)' : 'var(--we-gray-400)'
      }
    }, st === 'done' ? 'मिल गया ✓' : st === 'active' ? 'अभी करें' : 'लॉक')));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 160,
      top: truckY,
      transform: 'translate(-50%,-50%)',
      zIndex: 6,
      animation: 'truck-bob 2s ease-in-out infinite',
      filter: 'drop-shadow(0 6px 6px rgba(0,0,0,0.18))'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: TRUCK,
    width: 56,
    height: 56,
    alt: "truck"
  }))));
}
function VariationRoad({
  tripsDone
}) {
  return /*#__PURE__*/React.createElement(RewardScreen, {
    tripsDone: tripsDone,
    header: /*#__PURE__*/React.createElement(RoadHeader, {
      tripsDone: tripsDone
    }),
    journey: /*#__PURE__*/React.createElement(RoadJourney, {
      tripsDone: tripsDone
    })
  });
}

/* ===================================================================
   VARIATION 2 — इनाम सीढ़ी : festive promo header + podium climb
   =================================================================== */
function LadderHeader({
  tripsDone
}) {
  const cfg = useCfg();
  const TOTAL = totalFrom(cfg);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'radial-gradient(120% 100% at 50% 0%, #2FA8E6 0%, #1577CC 75%)',
      padding: '0 0 24px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    dark: true
  }), [[24, 70], [292, 60], [40, 130], [280, 120], [150, 40]].map((p, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: 'absolute',
      left: p[0],
      top: p[1],
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: '#FFE39A',
      opacity: 0.8
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '4px 20px 0',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 6,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(BigAmount, {
    value: inr(TOTAL),
    color: "#FFCD3C",
    stroke: "#B5651A",
    base: 32,
    effect: cfg.amountStyle,
    scale: cfg.amountScale
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: Math.round(18 * cfg.amountScale),
      fontWeight: 800,
      color: '#FFCD3C'
    }
  }, "\u0915\u093E \u0907\u0928\u093E\u092E")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      background: '#FFF7E3',
      border: '1px dashed #E7B64A',
      borderRadius: 999,
      display: 'inline-block',
      padding: '5px 16px',
      fontSize: 13,
      fontWeight: 700,
      color: '#8A5A12'
    }
  }, "1 \u092E\u0939\u0940\u0928\u0947 \u092E\u0947\u0902 3 \u091F\u094D\u0930\u093F\u092A \u092A\u0930"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(DeadlineBadge, {
    tripsDone: tripsDone
  }))));
}
function LadderJourney({
  tripsDone
}) {
  const cfg = useCfg();
  const MILESTONES = milestonesFrom(cfg);
  const heights = {
    1: 120,
    2: 168,
    3: 220
  };
  const order = [1, 2, 3];
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    style: {
      marginBottom: 16
    }
  }, "\u0907\u0928\u093E\u092E \u0915\u0940 \u0938\u0940\u0922\u093C\u0940 \u091A\u0922\u093C\u0947\u0902"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 8,
      height: 260
    }
  }, order.map(id => {
    const m = MILESTONES.find(x => x.id === id);
    const st = statusOf(id, tripsDone);
    const onThis = st === 'active' || tripsDone >= 3 && id === 3;
    const top = st === 'done' ? '#2EA750' : st === 'active' ? '#F7C145' : '#E4E7EE';
    const body = st === 'done' ? '#E7F4E8' : st === 'active' ? '#FDF3DA' : '#F4F5FA';
    return /*#__PURE__*/React.createElement("div", {
      key: id,
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative'
      }
    }, onThis && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: -8,
        animation: 'truck-bob 2s ease-in-out infinite',
        filter: 'drop-shadow(0 5px 5px rgba(0,0,0,0.18))',
        zIndex: 3
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: TRUCK,
      width: 46,
      height: 46,
      alt: "truck"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: heights[id],
        background: body,
        border: `2px solid ${top}`,
        borderBottom: 'none',
        borderRadius: '12px 12px 0 0',
        marginTop: 44,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 12,
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 6,
        background: top,
        borderRadius: '10px 10px 0 0'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18,
        fontWeight: 800,
        color: st === 'locked' ? 'var(--we-gray-400)' : 'var(--we-green-600)',
        marginTop: 6
      }
    }, inr(m.amount)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        color: 'var(--we-gray-500)',
        textAlign: 'center',
        marginTop: 2
      }
    }, m.trip), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8
      }
    }, st === 'done' ? /*#__PURE__*/React.createElement("img", {
      src: RA + 'right-tick.svg',
      width: 20,
      height: 20,
      alt: ""
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontWeight: 700,
        color: st === 'active' ? 'var(--we-yellow-text)' : 'var(--we-gray-400)',
        background: st === 'active' ? '#fff' : 'transparent',
        borderRadius: 999,
        padding: st === 'active' ? '2px 8px' : 0
      }
    }, st === 'active' ? 'अभी करें' : 'लॉक'))), /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: 8,
        background: top,
        opacity: 0.5
      }
    }));
  })));
}
function VariationLadder({
  tripsDone
}) {
  return /*#__PURE__*/React.createElement(RewardScreen, {
    tripsDone: tripsDone,
    header: /*#__PURE__*/React.createElement(LadderHeader, {
      tripsDone: tripsDone
    }),
    journey: /*#__PURE__*/React.createElement(LadderJourney, {
      tripsDone: tripsDone
    }),
    bg: "#EAF4FB"
  });
}

/* ===================================================================
   VARIATION 3 — खज़ाना : warm treasure trail with milestone coins
   =================================================================== */
function TrailHeader({
  tripsDone
}) {
  const cfg = useCfg();
  const TOTAL = totalFrom(cfg);
  const dLeft = daysLeftFrom(cfg, tripsDone);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'radial-gradient(120% 100% at 50% 0%, #FFD876 0%, #F4A93C 80%)',
      padding: '0 0 24px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '4px 20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: '#7B4E12'
    }
  }, "\u0939\u0930 \u091F\u094D\u0930\u093F\u092A \u092A\u0930 \u0916\u0941\u0932\u0924\u093E \u0939\u0948 \u0907\u0928\u093E\u092E"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'center',
      gap: 8,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(BigAmount, {
    value: inr(TOTAL),
    color: "#5A3408",
    stroke: "rgba(0,0,0,0.2)",
    base: 34,
    effect: cfg.amountStyle === 'shine' ? 'plain' : cfg.amountStyle,
    scale: cfg.amountScale
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: Math.round(18 * cfg.amountScale),
      fontWeight: 800,
      color: '#5A3408'
    }
  }, "\u0924\u0915")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'rgba(90,52,8,0.12)',
      color: '#5A3408',
      fontWeight: 700,
      fontSize: 13,
      padding: '5px 12px',
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: RA + 'loads/clock.svg',
    width: 14,
    height: 14,
    alt: ""
  }), dLeft === 0 ? 'सभी इनाम मिल गए' : `${dLeft} दिन बाकी`))));
}
function CoinTrail({
  tripsDone
}) {
  const cfg = useCfg();
  const MILESTONES = milestonesFrom(cfg);
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      background: 'linear-gradient(180deg,#FFFDF6,#FFF6E4)',
      border: '1px solid #F4E4BD'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    style: {
      marginBottom: 18
    }
  }, "\u0905\u092A\u0928\u093E \u0916\u091C\u093C\u093E\u0928\u093E \u0916\u094B\u0932\u0947\u0902"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }
  }, MILESTONES.map((m, i) => {
    const st = statusOf(m.id, tripsDone);
    const ring = st === 'done' ? '#2EA750' : st === 'active' ? '#E79B1E' : '#D8CDB4';
    const coinBg = st === 'done' ? 'linear-gradient(145deg,#37B85C,#1F8A47)' : st === 'active' ? 'linear-gradient(145deg,#FFD23E,#E79B1E)' : '#ECE6D6';
    const coinTxt = st === 'locked' ? '#B3A988' : '#fff';
    return /*#__PURE__*/React.createElement("div", {
      key: m.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'stretch'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 64,
        height: 64,
        borderRadius: '50%',
        background: coinBg,
        border: `3px solid ${ring}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        boxShadow: st === 'active' ? '0 0 0 6px rgba(231,155,30,0.18)' : '0 2px 6px rgba(0,0,0,0.1)',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        fontWeight: 800,
        color: coinTxt
      }
    }, '₹' + (m.amount / 1000 >= 1 ? m.amount / 1000 + 'K' : m.amount)), st === 'active' && /*#__PURE__*/React.createElement("img", {
      src: TRUCK,
      width: 36,
      height: 36,
      alt: "",
      style: {
        position: 'absolute',
        right: -26,
        top: -18,
        animation: 'truck-bob 2s ease-in-out infinite'
      }
    })), i < MILESTONES.length - 1 && /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        width: 3,
        background: st === 'done' ? '#2EA750' : 'repeating-linear-gradient(#D8CDB4 0 5px, transparent 5px 11px)',
        margin: '4px 0'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        paddingBottom: i < MILESTONES.length - 1 ? 20 : 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        border: `1px solid ${st === 'locked' ? 'var(--we-border)' : ring}`,
        borderRadius: 12,
        padding: '12px 14px',
        boxShadow: st === 'active' ? '0 4px 14px rgba(231,155,30,0.15)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: 'var(--we-ink)'
      }
    }, m.trip), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        fontWeight: 800,
        color: st === 'locked' ? 'var(--we-gray-400)' : 'var(--we-green-600)'
      }
    }, inr(m.amount))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        marginTop: 3,
        color: st === 'done' ? 'var(--we-green-600)' : st === 'active' ? '#B5710F' : 'var(--we-gray-400)'
      }
    }, st === 'done' ? 'खज़ाना खुल गया ✓' : st === 'active' ? 'यह ट्रिप पूरी करें और खोलें' : 'पिछली ट्रिप के बाद खुलेगा'))));
  })));
}
function VariationTrail({
  tripsDone
}) {
  return /*#__PURE__*/React.createElement(RewardScreen, {
    tripsDone: tripsDone,
    header: /*#__PURE__*/React.createElement(TrailHeader, {
      tripsDone: tripsDone
    }),
    journey: /*#__PURE__*/React.createElement(CoinTrail, {
      tripsDone: tripsDone
    }),
    bg: "#FBF4E6"
  });
}

/* ===================================================================
   CANVAS — 3 phones + state toggle + Tweaks
   =================================================================== */
const VARIATIONS = [{
  id: 'road',
  name: 'सफर — Winding Road',
  sub: 'truck climbs a road to the prize',
  Comp: VariationRoad,
  statusBar: '#2F663C',
  barDark: true
}, {
  id: 'ladder',
  name: 'इनाम सीढ़ी — Reward Ladder',
  sub: 'festive promo header + podium climb',
  Comp: VariationLadder,
  statusBar: '#1577CC',
  barDark: true
}, {
  id: 'trail',
  name: 'खज़ाना — Treasure Trail',
  sub: 'warm coin trail, unlock each chest',
  Comp: VariationTrail,
  statusBar: '#F4A93C',
  barDark: false
}];
function Phone({
  v,
  tripsDone
}) {
  const Comp = v.Comp;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-drags-parent": "1",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: '#1a1a1a'
    }
  }, v.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#6b7280'
    }
  }, v.sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 372,
      height: 760,
      background: '#111',
      borderRadius: 40,
      padding: 10,
      boxShadow: '0 30px 70px rgba(0,0,0,0.28)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: '#fff',
      borderRadius: 30,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 34,
      background: v.statusBar,
      color: v.barDark ? '#fff' : '#5A3408',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      fontSize: 12,
      fontWeight: 700,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", null, "\u0935\u094D\u0939\u0940\u0932\u0938\u093E\u0908")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Comp, {
    tripsDone: tripsDone
  })))));
}

/* reward tiers selectable from Tweaks (sum shown in label) */
const TIERS = {
  '3500': [500, 1000, 2000],
  '3000': [1000, 1000, 1000],
  '5000': [500, 1500, 3000]
};
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "rewardTier": "3500",
  "amountStyle": "pop",
  "amountScale": 1,
  "headline": "3 ट्रिप पूरी करें और",
  "suffix": "तक कमाएं",
  "ctaLabel": "लोड खोजें",
  "deadlineDays": 30,
  "confettiAlways": false
} /*EDITMODE-END*/;
function App() {
  const [stateKey, setStateKey] = React.useState('mid');
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const tripsDone = stateMeta[stateKey].tripsDone;
  const cfg = React.useMemo(() => ({
    ...DEFAULT_CFG,
    amounts: TIERS[t.rewardTier] || DEFAULT_CFG.amounts,
    amountStyle: t.amountStyle,
    amountScale: t.amountScale,
    headline: t.headline,
    suffix: t.suffix,
    ctaLabel: t.ctaLabel,
    deadlineDays: t.deadlineDays,
    confettiAlways: t.confettiAlways
  }), [t]);
  return /*#__PURE__*/React.createElement(RewardCtx.Provider, {
    value: cfg
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      fontFamily: 'var(--font-display)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid #e5e7eb',
      padding: '14px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: RL + 'wheelseye-mark.svg',
    width: 28,
    height: 28,
    alt: ""
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 800,
      color: '#111'
    }
  }, "\u090F\u0915\u094D\u091F\u093F\u0935\u0947\u0936\u0928 \u0907\u0928\u093E\u092E \u2014 ", inr(totalFrom(cfg)), " \u0924\u0915"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#6b7280'
    }
  }, "Milestone activation flow \xB7 3 directions \xB7 tap a state to compare"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 6,
      background: '#f1f3f7',
      padding: 5,
      borderRadius: 12
    }
  }, Object.keys(stateMeta).map(k => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setStateKey(k),
    style: {
      border: 'none',
      cursor: 'pointer',
      padding: '9px 16px',
      borderRadius: 9,
      fontFamily: 'var(--font-display)',
      fontSize: 14,
      fontWeight: 600,
      background: stateKey === k ? '#fff' : 'transparent',
      color: stateKey === k ? 'var(--we-green-600)' : '#6b7280',
      boxShadow: stateKey === k ? '0 1px 4px rgba(0,0,0,0.12)' : 'none'
    }
  }, stateMeta[k].label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 36,
      padding: '32px',
      justifyContent: 'center',
      flexWrap: 'wrap',
      alignItems: 'flex-start'
    }
  }, VARIATIONS.map(v => /*#__PURE__*/React.createElement(Phone, {
    key: v.id,
    v: v,
    tripsDone: tripsDone
  })))), /*#__PURE__*/React.createElement(TweaksPanel, {
    title: "Tweaks"
  }, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Reward"
  }, /*#__PURE__*/React.createElement(TweakSelect, {
    label: "Reward tier",
    value: t.rewardTier,
    options: [{
      value: '3500',
      label: '₹3,500 · 500·1K·2K'
    }, {
      value: '3000',
      label: '₹3,000 · 1K·1K·1K'
    }, {
      value: '5000',
      label: '₹5,000 · 500·1.5K·3K'
    }],
    onChange: v => setTweak('rewardTier', v)
  }), /*#__PURE__*/React.createElement(TweakNumber, {
    label: "Deadline",
    value: t.deadlineDays,
    min: 7,
    max: 60,
    step: 1,
    unit: "d",
    onChange: v => setTweak('deadlineDays', v)
  })), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Headline number"
  }, /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Style",
    value: t.amountStyle,
    options: ['pop', 'shine', 'glow', 'plain'],
    onChange: v => setTweak('amountStyle', v)
  }), /*#__PURE__*/React.createElement(TweakSlider, {
    label: "Size",
    value: t.amountScale,
    min: 0.8,
    max: 1.4,
    step: 0.05,
    onChange: v => setTweak('amountScale', v)
  })), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Copy"
  }, /*#__PURE__*/React.createElement(TweakText, {
    label: "Headline",
    value: t.headline,
    onChange: v => setTweak('headline', v)
  }), /*#__PURE__*/React.createElement(TweakText, {
    label: "CTA",
    value: t.ctaLabel,
    onChange: v => setTweak('ctaLabel', v)
  })), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Effects"
  }, /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Always confetti",
    value: t.confettiAlways,
    onChange: v => setTweak('confettiAlways', v)
  }))));
}
window.RewardsMilestoneApp = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rewards-milestone/variations.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.PremiumPill = __ds_scope.PremiumPill;

__ds_ns.FilterChip = __ds_scope.FilterChip;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.ToggleSwitch = __ds_scope.ToggleSwitch;

__ds_ns.LoadCard = __ds_scope.LoadCard;

__ds_ns.LoadListCard = __ds_scope.LoadListCard;

__ds_ns.RouteLadder = __ds_scope.RouteLadder;

__ds_ns.BottomNav = __ds_scope.BottomNav;

__ds_ns.SegmentedTabs = __ds_scope.SegmentedTabs;

})();
