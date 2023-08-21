import { Colors, Shadow } from '../StyleTypes';

const light = {
  title: 'light',
  colors: {
    background: '#0a0c21',
    textPrimary: '#bdbdbd',//8899a6
    hoverColor: '#F231A5',//#369ee3

    textSecondary: Colors.HIGH_PURE,
    header: Colors.PRIMARY_LIGHTEST,
    textHeader: Colors.PRIMARY_HIGHLIGHT,
    iconHeader: '#2F72CF',
    navbar: Colors.PRIMARY_PURE,
    navbarHoverItem: Colors.PRIMARY_HIGHLIGHT,
    dropdownBackground: Colors.HIGH_MEDIUM,
    dropdownHover: Colors.PRIMARY_LIGHTEST,
    solidButton: '#004992',
    outlineActiveButton: '#004992',
    outlineInactiveButton: Colors.LOW_LIGHT,
    backgroundInput: Colors.HIGH_LIGHT,
    backgroundInputError: Colors.ERROR_WARNING,
    textErrorInput: Colors.TOAST_WARNING,
    placeholderInput: Colors.HIGH_DARK,
    navbarShadow: 'none',
    backgroundButton: '#004992',
    backgroundBox: Colors.PRIMARY_HIGHLIGHT,
    backgroundHeaderModal: Colors.PRIMARY_LIGHT,
    boxShadow: '#c0bfbf',
    boxGroup: '#E5E5E5',
    boxGroupBorder: '#E5E5E5',
    boxText: '#004992',
    whiteDarkBlueLight: '#025CB7'
  },
  shadows: {
    modalShadow: Shadow.LIGHT_MODAL_SHADOW,
  }
}

export default light;