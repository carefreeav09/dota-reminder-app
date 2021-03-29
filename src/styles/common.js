// colors
const white = '#FFFFFF';
const black = '#000000';
const transparent = 'transparent';
// all app colors
const green = '#007859';
const transparentGreen = '#00785980';
const darkGreen = '#004433';
const darkYellow = '#AAA633';
const dusk = '#3E4361';
const gray1 = '#b3b5c1';
const gray2 = '#a0a4bb';
const gray3 = '#404040';
const red = '#ea5b0d';

const colors = {
    white,
    green,
    darkGreen,
    darkYellow,
    black,
    dusk,
    gray1,
    gray2,
    gray3,
    red,
    transparent,
    transparentGreen,
    // semantic colors
    primary: green,
    primaryDark: darkGreen,
    backgroundPrimary: green,
    backgroundSecondary: white,
    textPrimary: white,
    textSecondary: green,
    textTertiary: dusk,
    borderSelected: white,
    borderColor: gray2,
    // alert: red,
    // success: green,
};

// Layout
const baseLayout = {
    backgroundColor: colors.backgroundPrimary,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
};

const screenContainer = {
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
};

const lineHeights = {
    small: 16,
    big: 22
};

const fontFamilies = {
    light: 'Gotham-Light',
    bold: 'Gotham-Bold',
};

// font sizes
const sizes = {
    size1: 22,
    size2: 20,
    size3: 18,
    size4: 16,
    size5: 14,
    size6: 12,
    size7: 10,
    default: 16,
};

const headerStyle = {
    backgroundColor: colors.headerColor,
    borderBottomColor: colors.headerBorder,
    borderBottomWidth: 1,
    elevation: 0,
    shadowOpacity: 0,
    shadowColor: colors.transparent
};

const textStyles = {
    sectionTitle: {
        fontFamily: fontFamilies.bold,
        fontSize: sizes.size2,
        lineHeight: lineHeights.big,
        letterSpacing: 0,
        color: gray2,
    },
    contentTitle: {
        fontFamily: fontFamilies.bold,
        fontSize: sizes.size3,
        lineHeight: lineHeights.big,
        letterSpacing: 0,
        color: green,
    },
    contentDesc: {
        fontFamily: fontFamilies.light,
        fontSize: sizes.default,
        lineHeight: lineHeights.big,
        letterSpacing: 0,
        color: dusk,
    }
};

const commonStyles = {
    flexHorizontalCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    flexHorizontalSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    flexHorizontalSpaceAround: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    flexHorizontalStart: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    flexVerticalCenter: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    flexVerticleSpaceBetween: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    flexVerticleSpaceAround: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
};

const htmlContentStyles = {
    p: {
        color: colors.gray3,
        fontSize: sizes.size3,
        marginVertical: 10,
    },
    h2: {
        fontSize: sizes.size1,
        fontWeight: 'bold',
        color: colors.green,
        marginVertical: 10,
        fontFamily: fontFamilies.bold,
    },
    h4: {
        fontSize: sizes.size2,
        fontWeight: 'bold',
        color: colors.green,
        marginVertical: 10,
        fontFamily: fontFamilies.bold,
    },
    h6: {
        fontSize: sizes.size3,
        fontWeight: 'bold',
        color: colors.green,
        marginVertical: 10,
        fontFamily: fontFamilies.bold,
    },
    li: {
        fontSize: sizes.size3,
        fontFamily: fontFamilies.bold,
    },
    strong: {
        fontWeight: 'bold',
        fontFamily: fontFamilies.bold,
    },
    img: {
        height: '300 !important', flex: 1, width: null,
    }
};

export {
    colors,
    sizes,
    lineHeights,
    fontFamilies,
    baseLayout,
    screenContainer,
    headerStyle,
    textStyles,
    commonStyles,
    htmlContentStyles
};
