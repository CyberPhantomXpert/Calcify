export function calculateSine(angleInDegrees: number): number {
    const angleInRadians = (angleInDegrees * Math.PI) / 180;
    return Math.sin(angleInRadians);
}

export function calculateCosine(angleInDegrees: number): number {
    const angleInRadians = (angleInDegrees * Math.PI) / 180;
    return Math.cos(angleInRadians);
}

export function calculateTangent(angleInDegrees: number): number {
    const angleInRadians = (angleInDegrees * Math.PI) / 180;
    return Math.tan(angleInRadians);
}

export function validateAngleInput(angle: number): boolean {
    return !isNaN(angle) && angle >= -360 && angle <= 360;
}