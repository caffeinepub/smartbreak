import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { CTAType } from '../backend';

interface ContactSubmissionData {
  name: string;
  organization: string;
  email: string;
  message: string;
  cta: CTAType;
}

export function useCreateContactSubmission() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: ContactSubmissionData) => {
      if (!actor) throw new Error('Actor not available');
      return actor.createSubmission(data.name, data.organization, data.email, data.message, data.cta);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['submissions'] });
    },
  });
}
