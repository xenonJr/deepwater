import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncateText', standalone: true })
export class TruncateTextPipe implements PipeTransform {
  transform(text: string, limit = 120): string {
    if (!text || text.length <= limit) return text;
    return text.substring(0, limit).trim() + '…';
  }
}
