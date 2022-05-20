interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;
  }
}
