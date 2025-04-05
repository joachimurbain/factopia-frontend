import { Component, input, computed } from "@angular/core";

@Component({
    selector: 'app-quizz-card',
    template: `
    <a [href]="url()" class="block">
        <div [style]="gradientStyle()" 
             class="aspect-square flex justify-center items-center rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4">
            <span class="text-xl text-center font-medium" [class]="textColorClass()">
                {{ name() }}
            </span>
        </div>
    </a>
    `,
    standalone: true
})
export class QuizzCardComponent {
    name = input.required<string>();
    url = input.required<string>();
    
    // Gradient inputs with default values
    startColor = input<string>('#4F46E5'); // indigo-600
    endColor = input<string>('#EC4899');   // pink-500
    gradientAngle = input<number>(45);
    
    // Computed style for the gradient
    gradientStyle = computed(() => ({
        'background': `linear-gradient(${this.gradientAngle()}deg, ${this.startColor()} 0%, ${this.endColor()} 100%)`
    }));

    // Compute text color based on gradient (using light text by default)
    textColorClass = computed(() => 'text-white drop-shadow-sm');
}
