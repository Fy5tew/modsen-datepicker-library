import { useIcons } from '#/contexts/icons';
import { Formatter } from '#/types/formatters';

import { Button, Icon, Title, Wrapper } from './styled';

interface DateSliderProps {
    date: Date;
    formatTitle: Formatter<Date>;
    onClick?: () => void;
    onPrevClick?: () => void;
    onNextClick?: () => void;
}

export function DateSlider({
    date,
    formatTitle,
    onClick,
    onNextClick,
    onPrevClick,
}: DateSliderProps) {
    const { prev, next } = useIcons();

    const formattedTitle = formatTitle(date);

    const handleClick = () => onClick?.call({});
    const handlePrevClick = () => onPrevClick?.call({});
    const handleNextClick = () => onNextClick?.call({});

    return (
        <Wrapper>
            <Button onClick={handlePrevClick}>
                <Icon src={prev} alt="<<" />
            </Button>
            <Title onClick={handleClick}>{formattedTitle}</Title>
            <Button onClick={handleNextClick}>
                <Icon src={next} alt=">>" />
            </Button>
        </Wrapper>
    );
}
