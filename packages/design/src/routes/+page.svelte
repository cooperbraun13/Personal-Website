<script lang="ts">
    import EmailTemplate from '@repo/email/templates/basic.html?raw';

    import { renderTemplate } from '@repo/email/utils';

  const email = renderTemplate(EmailTemplate, {
    name: 'John',
    date: 'Jun 40, 2022, 4:00:00 PM'
  });
</script>

{@html email}