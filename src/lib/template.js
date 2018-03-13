export default function template({ status = 'No status', board }) {
  return `
          <h2 class="status">${status}</h2>
          <div class="board">
              ${board
                .map(
                  (value, key) =>
                    `<button type="button" class="cell" data-key="${key}">${value ||
                      ''}</button>`,
                )
                .join('')}
          </div>
      `;
}
