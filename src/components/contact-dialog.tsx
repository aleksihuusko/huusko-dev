"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { useState, useCallback } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Full name is required")
    .max(50, "That is a bit too long")
    .regex(/^[a-zA-Z\s]+$/, "Only letters and spaces"),
  email: z.string().email("Invalid email address"),
  message: z
    .string()
    .min(10, "Give me some more details")
    .max(1000, "That is a bit too long"),
});

export default function ContactDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleDialogClose = useCallback(() => {
    setIsOpen(false);
    form.reset();
  }, [form]);

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
        throw new Error("Failed to send message");
      }

      form.reset();

      toast({
        title: "Message sent",
        description: "I will get back to you as soon as possible.",
      });

      handleDialogClose();
    } catch {
      setSubmitError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild onClick={() => setIsOpen(true)}>
        {children}
      </DialogTrigger>
      <DialogContent className="w-full max-w-md">
        <DialogHeader>
          <DialogTitle>Contact</DialogTitle>
          <DialogDescription className="sr-only">
            Send me a message and I will get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center justify-between gap-2 text-foreground">
                    Name <FormMessage />
                  </FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="on"
                      type="text"
                      placeholder="Name"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center justify-between gap-2 text-foreground">
                    Email <FormMessage />
                  </FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="on"
                      type="email"
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center justify-between gap-2 text-foreground">
                    Message <FormMessage />
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-36 resize-none"
                      placeholder="Message"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            {submitError && (
              <p className="text-sm text-destructive">{submitError}</p>
            )}
            <Button size="lg" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send message"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
