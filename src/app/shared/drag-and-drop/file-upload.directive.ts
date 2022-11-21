import { Directive, HostListener, Output, EventEmitter, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appFileUploadDragNDrop]'
})
export class FileUploadDirective {
  @Output() filesUploaded: EventEmitter<FileList> = new EventEmitter();
  @Input() accepted: string;

  @HostBinding("style.background") protected background = "";

  constructor() { }

  @HostListener("dragover", ["$event"]) public onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = "#999";
  }

  @HostListener("dragleave", ["$event"]) public onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = "";
  }

  @HostListener('drop', ['$event'])
  public onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();

    const files = event.dataTransfer.files;
    const isFilesAccepted = Array.from(files).every((file) => file.type.match(this.accepted));

    this.background = "";
    if (!isFilesAccepted) {
      return;
    }

    this.filesUploaded.emit(event.dataTransfer.files);
  }
}
