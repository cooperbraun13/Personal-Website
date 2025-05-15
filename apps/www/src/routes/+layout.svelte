<script lang="ts">
import "../app.css";

import { Toaster } from '@repo/design/primitives/sonner';
import { ModeWatcher } from "mode-watcher";

const { children } = $props();
</script>

<Toaster />
<ModeWatcher />

{@render children()}
