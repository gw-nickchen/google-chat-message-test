import type { ActionInputs } from './types';

export const createCardTemplate = ({ title, subTitle, contents, actionPage }: ActionInputs) => ({
  cardsV2: [
    {
      cardId: 'createCardMessage',
      card: {
        header: {
          title,
          subtitle: subTitle,
        },
        sections: [
          {
            widgets: [
              ...contents.map((content) => ({
                textParagraph: {
                  text: content,
                },
              })),
              {
                buttonList: {
                  buttons: [
                    {
                      text: 'github action',
                      onClick: {
                        openLink: {
                          url: actionPage,
                        },
                      },
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
    },
  ],
});
