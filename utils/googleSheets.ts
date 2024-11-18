const GOOGLE_SHEETS_API_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxUu_sPBGKnvV8u1kBibA56quPBz9S-06UW3nHlYFlUUG6vUcfNpmej3cOS8it2Ncl-5w/exec';
interface FormDataFields{
  name:string;
  email:string;
  plan:string;
}
export const submitToGoogleSheets = async (data: FormDataFields): Promise<Response> => {
  try {
    const response = await fetch(GOOGLE_SHEETS_API_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return response;
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    throw error;
  }
};