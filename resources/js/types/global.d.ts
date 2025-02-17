import type { Alpine } from 'alpinejs';

import { autoExpandTextInput as AutoExpandTextInput } from '@/utils/autoExpandTextInput';
import type {
  newsCarouselComponent as NewsCarouselComponent,
  hideEarnedCheckboxComponent as HideEarnedCheckboxComponent,
  tooltipComponent as TooltipComponent,
} from '@/alpine';
import type { handleLeaderboardTabClick as HandleLeaderboardTabClick } from '@/utils/handleLeaderboardTabClick';
import type { initializeTextareaCounter as InitializeTextareaCounter } from '@/utils/initializeTextareaCounter';
import type { injectShortcode as InjectShortcode } from '@/utils/injectShortcode';
import type { loadPostPreview as LoadPostPreview } from '@/utils/loadPostPreview';
import type { toggleUserCompletedSetsVisibility as ToggleUserCompletedSetsVisibility } from '@/utils/toggleUserCompletedSetsVisibility';

declare global {
  var Alpine: Alpine;
  var autoExpandTextInput: typeof AutoExpandTextInput;
  var cfg: Record<string, unknown> | undefined;
  var copyToClipboard: (text: string) => void;
  var handleLeaderboardTabClick: typeof HandleLeaderboardTabClick;
  var hideEarnedCheckboxComponent: typeof HideEarnedCheckboxComponent;
  var initializeTextareaCounter: typeof InitializeTextareaCounter;
  var injectShortcode: typeof InjectShortcode;
  var loadPostPreview: typeof LoadPostPreview;
  var newsCarouselComponent: typeof NewsCarouselComponent;
  var showStatusSuccess: (message: string) => void;
  var toggleUserCompletedSetsVisibility: typeof ToggleUserCompletedSetsVisibility;
  var tooltipComponent: typeof TooltipComponent;
}
