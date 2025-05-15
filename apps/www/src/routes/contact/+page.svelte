<script lang="ts">
  import { Button } from '@repo/design/primitives/button';
  import { Input } from '@repo/design/primitives/input';
  import { Label } from '@repo/design/primitives/label';

  import { toggleMode } from 'mode-watcher';

  import { Textarea } from '@repo/design/primitives/textarea';

  import AuroraBackground from '$lib/components/aurora-background.svelte';
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
  } from '@repo/design/primitives/card';

  import { superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';

  import { contactSchema } from '$lib/schemas/contact';

  let { data } = $props();

  const { form, errors, constraints, enhance, message } = superForm(data.form, {
    validationMethod: 'onblur',
    validators: zodClient(contactSchema)
  });
</script>

<div class="fixed top-0 p-4 w-full flex justify-center bg-background/50 backdrop-blur-2xl z-20">
  <div class="grid grid-cols-[8rem_1fr_8rem] w-full max-w-6xl items-center hero-navbar">
    <Button variant="ghost" size="sm" class="w-fit" onclick={toggleMode}>Braun</Button>
  </div>
</div>

<AuroraBackground>
  <div class="min-h-screen flex flex-col justify-center z-10">
    <div class="w-full max-h-min h-full grid grid-cols-2 justify-items-center items-center gap-32">
      <div class="flex flex-col gap-8 justify-self-end h-full max-w-lg">
        <h1 class="font-extrabold text-5xl w-full">Let's do something big</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus reprehenderit eos impedit
          ipsam aspernatur expedita iste fugiat temporibus. Libero, nesciunt!
        </p>
      </div>
      <div class="max-w-md w-full justify-self-start h-full">
        <Card>
          <CardHeader>
            <CardTitle class="text-xl font-bold">Let's chat</CardTitle>
            <CardDescription>Just need a few quick details.</CardDescription>
          </CardHeader>
          <CardContent>
            <form method="post" action="?/contact" use:enhance class="flex flex-col gap-4">
              <div class="flex flex-col gap-2">
                <Label for="fullName" class="text-sm">Name</Label>
                <Input
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  bind:value={$form.fullName}
                  aria-invalid={$errors?.fullName ? 'true' : undefined}
                  {...$constraints.fullName}
                />
              </div>
              <div class="flex flex-col gap-2">
                <Label for="email" class="text-sm">Email</Label>
                <Input
                  type="text"
                  name="email"
                  placeholder="john.doe@acme.com"
                  bind:value={$form.email}
                  aria-invalid={$errors?.email ? 'true' : undefined}
                  {...$constraints.email}
                />
              </div>
              <div class="flex flex-col gap-2">
                <Label for="information" class="text-sm">What are you reaching out for?</Label>
                <Textarea
                  name="information"
                  placeholder="I'd like to give you a full-time job..."
                  bind:value={$form.information}
                  aria-invalid={$errors?.information ? 'true' : undefined}
                  {...$constraints.information}
                ></Textarea>
              </div>
              {#if $errors.fullName || $errors.email}
                <div class="flex flex-col gap-1 w-full">
                  {#if $errors.fullName}<span class="text-error text-sm">• {$errors.fullName}</span
                    >{/if}
                  {#if $errors.email}<span class="text-error text-sm">• {$errors.email}</span>{/if}
                </div>
              {/if}
              <Button type="submit">Submit</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</AuroraBackground>
