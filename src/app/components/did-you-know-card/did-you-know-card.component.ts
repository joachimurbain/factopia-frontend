import { Component, input } from '@angular/core';

@Component({
  selector: 'app-did-you-know-card',
  standalone: true,
  template: `
    <div 
      [class]="getClasses()"
    >
      <div class="text-center text-[#059669] text-2xl ">
        {{ text() }}
      </div>
    </div>
  `,
})
export class DidYouKnowCardComponent {
  text = input.required<string>();
  startColor = input.required<string>();
  endColor = input.required<string>();
  gradientAngle = input<number>(45);

  getClasses(): string {
    return `w-full h-[230px] p-6 rounded-lg shadow-md flex flex-col justify-center items-center font-[Delius]`;
  }
}