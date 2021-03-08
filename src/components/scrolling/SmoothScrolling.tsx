/* eslint-disable max-lines */
// FIXME: correct the bug later

interface Animation {
    "duration": number;
    "id": string;
}

/**
 * @bug there are cuts between scrolls.
 */
class SmoothScrolling {
    private readonly element: HTMLElement;
    private readonly callback?: FunctionOf;
    private timer: number | null = null;
    private startTime: number = Date.now();
    private duration: number;
    private percentage = 0;

    constructor(
        element: HTMLElement,
        animation: Animation,
        callback?: FunctionOf
    ) {
        this.callback = callback;
        this.element = element;
        this.duration = animation.duration;
    }

    static initscrollTo(
        element: HTMLElement,
        animation: Animation,
        callback?: FunctionOf
    ): void {
        const instance = new SmoothScrolling(element, animation, callback);
        instance.scrollTo();
    }

    public scrollTo() {
        this.startTime = Date.now();
        this.percentage = 0;

        if (this.timer) {
            clearInterval(this.timer);
        }

        this.timer = window.setTimeout(this.step, 10);
    }

    private step = () => {
        let yScroll;
        const elapsed = Date.now() - this.startTime;

        if (elapsed > this.duration && this.timer) {
            clearTimeout(this.timer);
        }

        this.percentage = elapsed / this.duration;

        if (this.percentage > 1 && this.timer) {
            clearTimeout(this.timer);
            if (this.callback) {
                this.callback();
            }
        } else {
            yScroll = this.outQuint(
                elapsed,
                window.pageYOffset,
                this.targetY,
                this.duration
            );
            window.scrollTo(0, yScroll);
            this.timer = window.setTimeout(this.step, 10);
        }
    };

    private get position(): DOMRect {
        return this.element.getBoundingClientRect();
    }

    private stop(): void {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }

    private get delta(): number {
        return this.element.offsetTop - window.pageYOffset;
    }

    private get bottomScrollableY(): number {
        return this.documentHeight - window.innerHeight;
    }

    private outQuint(t: number, b: number, c: number, d: number): number {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    }

    private get targetY(): number {
        const { element } = this;
        return this.bottomScrollableY < this.delta
            ? this.bottomScrollableY -
                  (this.documentHeight -
                      element.offsetTop -
                      element.offsetHeight -
                      window.pageYOffset)
            : this.delta;
    }

    private get documentHeight(): number {
        return Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
        );
    }
}

export default SmoothScrolling;
