import { Color, Font, FontSize, FontWeight } from './style';

export interface Colors {
    datepickerBorder: Color;
    datepickerBg: Color;
    datepickerFg: Color;
    datepickerPlaceholder: Color;
    datepickerLabelFg: Color;
    calendarBorder: Color;
    calendarBg: Color;
    calendarFg: Color;
    calendarSliderBg: Color;
    calendarSliderFg: Color;
    calendarSliderHoverBg: Color;
    calendarSliderHoverFg: Color;
    calendarTitleCellBg: Color;
    calendarTitleCellFg: Color;
    calendarTitleCellHoverBg: Color;
    calendarTitleCellHoverFg: Color;
    calendarCellBg: Color;
    calendarCellFg: Color;
    calendarCellHoverBg: Color;
    calendarCellHoverFg: Color;
    calendarCellDisabledBg: Color;
    calendarCellDisabledFg: Color;
    calendarCellSelectedBg: Color;
    calendarCellSelectedFg: Color;
    calendarCellRangeStartBg: Color;
    calendarCellRangeStartFg: Color;
    calendarCellRangeMiddleBg: Color;
    calendarCellRangeMiddleFg: Color;
    calendarCellRangeEndBg: Color;
    calendarCellRangeEndFg: Color;
    calendarCellWeekendBg: Color;
    calendarCellWeekendFg: Color;
    calendarCellHolidayBg: Color;
    calendarCellHolidayFg: Color;
    calendarCellTodoMarker: Color;
    calendarButtonBorder: Color;
    calendarButtonBg: Color;
    calendarButtonFg: Color;
    calendarButtonHoverBg: Color;
    calendarButtonHoverFg: Color;
}

export interface Fonts {
    datepicker: Font;
    calendar: Font;
}

export interface FontSizes {
    datepicker: FontSize;
    datepickerLable: FontSize;
    calendar: FontSize;
    calendarSlider: FontSize;
    calendarTitleCell: FontSize;
    calendarCell: FontSize;
    calendarButton: FontSize;
}

export interface FontWeights {
    datepicker: FontWeight;
    datepickerLable: FontWeight;
    calendar: FontWeight;
    calendarSlider: FontWeight;
    calendarTitleCell: FontWeight;
    calendarCell: FontWeight;
    calendarButton: FontWeight;
}

export interface Theme {
    colors: Colors;
    fonts: Fonts;
    fontSizes: FontSizes;
    fontWeights: FontWeights;
}
