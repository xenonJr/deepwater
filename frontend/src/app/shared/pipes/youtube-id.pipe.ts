import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'youtubeId', standalone: true })
export class YoutubeIdPipe implements PipeTransform {
  transform(url: string): string {
    if (!url) return '';
    const match = url.match(/(?:v=|youtu\.be\/)([^&?/]+)/);
    return match ? match[1] : '';
  }
}
