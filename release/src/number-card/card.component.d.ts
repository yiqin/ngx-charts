import { EventEmitter, ElementRef, SimpleChanges, OnChanges, ChangeDetectorRef, NgZone, OnDestroy } from '@angular/core';
export declare class CardComponent implements OnChanges, OnDestroy {
    private cd;
    private zone;
    color: any;
    x: any;
    y: any;
    width: any;
    height: any;
    label: any;
    data: any;
    select: EventEmitter<{}>;
    textEl: ElementRef;
    element: HTMLElement;
    value: string;
    transform: string;
    trimmedLabel: string;
    cardWidth: number;
    cardHeight: number;
    textWidth: number;
    resizeScale: number;
    textFontSize: number;
    textTransform: string;
    originalWidth: number;
    originalHeight: number;
    originalWidthRatio: number;
    originalHeightRatio: number;
    initialized: boolean;
    animationReq: any;
    constructor(element: ElementRef, cd: ChangeDetectorRef, zone: NgZone);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    update(): void;
    getTextColor(color: any): string;
    startCount(): void;
    scaleText(): void;
    onClick(): void;
}
