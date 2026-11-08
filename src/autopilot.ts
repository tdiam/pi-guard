let enabled = false;

export const AUTOPILOT_BLOCK_REASON =
	"[pi-guard: This command is not available in the autopilot mode. Try a different way to achieve this.]";

export function isAutopilotEnabled(): boolean {
	return enabled;
}

export function toggleAutopilot(): boolean {
	enabled = !enabled;
	return enabled;
}
