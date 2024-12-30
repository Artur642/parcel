export const feedbackData = [];

export function saveFeedback(feedback) {
  feedbackData.push(feedback);
  console.log('Current Feedbacks:', feedbackData);
}
