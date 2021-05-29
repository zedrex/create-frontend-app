import { extendTheme } from "@chakra-ui/react";

// Global style overrides
import styles from "./styles";

// Foundational style overrides
import fonts from "./foundations/fonts";
import colors from "./foundations/colors";

// Component style overrides
import button from "./components/button";

const overrides = {
    styles,
    fonts,
    colors,

    // Other foundational style overrides go here
    components: {
        button,
        // Other components go here
    },
};
export default extendTheme(overrides);
