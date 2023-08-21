import { isBrowser } from "./isBrowser";

interface ICallbackEntry {
    target: Element;
}

const fallBackObserver: IntersectionObserver = {
    // eslint-disable-next-line
  observe: (target: Element) => {},
    // eslint-disable-next-line
  unobserve: (target: Element) => {},
    root: null,
    rootMargin: "",
    // eslint-disable-next-line
  disconnect: () => {},
    takeRecords: () => [] as Array<IntersectionObserverEntry>,
    thresholds: [0],
};

class Observer {
    private observables: Map<any, any>;
    public observer: IntersectionObserver;

    constructor(
        options = {
            rootMargin: "0px",
            threshold: 0.0,
        }
    ) {
        this.callback = this.callback.bind(this);
        this.observables = new Map();
        this.observer = isBrowser
            ? new IntersectionObserver(this.callback, options)
            : fallBackObserver;
    }

    public callback: (entries: Array<ICallbackEntry>) => void = (
        entries: Array<ICallbackEntry>
    ) => {
        entries.forEach(entry => {
            this.observables.get(entry.target)?.(entry);
        });
    };

    public observe(
        el: Element,
        cb: (e: { isIntersecting: boolean }) => void
    ): void {
        this.observables.set(el, cb);
        this.observer.observe(el);
    }

    public unobserve(el: HTMLElement): void {
        this.observables.delete(el);
        // Todo: Add back in to unobserve
        // this.observer.unobserve(el)
    }

    public disconnect(): void {
        this.observer.disconnect();
        this.observables.clear();
    }

    public takeRecords(): ReturnType<typeof this.observer.takeRecords> {
        return this.observer.takeRecords();
    }
}

const observer = new Observer({
    rootMargin: "0px",
    threshold: 0.0,
});

export default observer;
