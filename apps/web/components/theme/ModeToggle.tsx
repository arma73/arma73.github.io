import { useTheme } from "next-themes";
import { SwitchModeOffIcon, SwitchModeOnIcon } from "#web/components/icons";
import { Button, CircledUIBox } from "@lib/ui";

const modecn =
    "h-11 w-11 transition -mt-1 [@media(prefers-color-scheme:dark)]:group-hover:fill-yellow-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-yellow-600";

const ModeToggle = () => {
    const { setTheme } = useTheme();

    function toggleMode() {
        const isDarkMode = document.documentElement.classList.toggle("dark");

        setTheme(isDarkMode ? "dark" : "light");
    }

    return (
        <CircledUIBox vsize="sm" block="center" className="group">
            <Button
                as="button"
                vsize={null}
                aria-label="Toggle dark mode"
                onClick={toggleMode}>
                <SwitchModeOffIcon className={modecn} />
                <SwitchModeOnIcon className={modecn} />
            </Button>
        </CircledUIBox>
    );
};

export default ModeToggle;
