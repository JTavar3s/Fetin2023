import { Colors, Shadow } from '../StyleTypes';

const dark = {
  title: 'dark',
  colors: {
    background: Colors.LOW_DARK,
    textPrimary: Colors.HIGH_PURE,
    textSecondary: Colors.HIGH_PURE,
    header: Colors.LOW_PURE,
    textHeader: Colors.HIGH_PURE,
    iconHeader: Colors.HIGH_PURE,
    navbar: Colors.LOW_DARK,
    navbarHoverItem: Colors.LOW_PURE,
    dropdownBackground: Colors.LOW_PURE,
    dropdownHover: Colors.LOW_DARK,
    solidButton: Colors.PRIMARY_LIGHT,
    outlineActiveButton: '#1C8DFF',
    outlineInactiveButton: Colors.HIGH_PURE,
    backgroundInput: '#272727',
    backgroundInputError: '#2F2020',
    textErrorInput: Colors.ERROR_WARNING,
    placeholderInput: Colors.TOAST_WARNING,
    navbarShadow: '0px 3px 6px #2F72CF',
    backgroundButton: Colors.CONFIRMATION_GRADIENT,
    backgroundHeaderModal: Colors.LOW_PURE,
    backgroundBox: Colors.LOW_PURE,
    boxShadow: '#000000',
    boxGroup: '#232323',
    boxGroupBorder: '#333333',
    boxText: Colors.HIGH_PURE,
    whiteDarkBlueLight: '#F8F9FA',
  },

  shadows : {
    modalShadow: Shadow.DARK_MODAL_SHADOW,
  }
}

export default dark;