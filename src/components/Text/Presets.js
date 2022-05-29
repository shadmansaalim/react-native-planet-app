import { colors } from "../../theme/colors";
import { typography } from "../../theme/typography";

const BASE = {
    fontFamily: typography.primary,
    color: colors.white,
    fontSize: 16
}

const BASE_BOLD = {
    fontFamily: typography.primaryBold,
    color: colors.white,
    fontSize: 16
}

const BOLD = {
    fontFamily: typography.bold,
    color: colors.white
}

export const presets = {
    default: BASE,
    bold: BOLD,
    h1: {
        ...BOLD,
        fontSize: 32
    },
    h2: {
        ...BOLD,
        fontSize: 28
    },
    h3: {
        ...BOLD,
        fontSize: 24,
    },
    h4: {
        ...BOLD,
        fontSize: 14,
    },
    small: {
        ...BASE,
        fontSize: 12
    }
}