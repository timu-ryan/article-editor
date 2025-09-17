import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import {useTheme} from "@/shared/lib/hooks/useTheme";
import ThemeIcon from './assets/theme-icon.svg'
import {Theme} from "@/shared/lib/theme/ThemeContext";
import {Button, ThemeButton} from "@/shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const {className} = props;
  const { theme, toggleTheme } = useTheme()


  {/* TODO: add vars for icon color and move it to shared */}
  const themeColors: Record<Theme, string> = {
    [Theme.LIGHT]: "#FFC700",
    [Theme.DARK]: "#0115C6",
  };

  return (
    <>


      <Button
        theme={ThemeButton.CLEAR}
        onClick={toggleTheme}
        className={classNames(cls.themeswitcher, {}, [className])}
      >
        <ThemeIcon width={40} height={40} style={{ color: themeColors[theme] }} />
      </Button>
    </>
  )
}