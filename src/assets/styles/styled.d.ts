import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: string;
      textPrimary: string;
      hoverColor: string;
      textSecondary: string;
      header: string;
      textHeader: string;
      iconHeader: string;
      navbar: string;
      navbarHoverItem: string;
      dropdownBackground: string;
      dropdownHover: string;
      solidButton: string;
      outlineActiveButton: string;
      outlineInactiveButton: string;
      backgroundInput: string;
      backgroundInputError: string;
      textErrorInput: string;
      placeholderInput: string;
      navbarShadow: string;
      backgroundButton: string;
      backgroundBox: string;
      backgroundHeaderModal: string;
      boxShadow: string;
      boxGroup: string;
      boxGroupBorder: string;
      boxText: string;
      whiteDarkBlueLight: string;
    };
    shadows: {
      modalShadow: string,
    }
  }
}
