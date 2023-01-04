///@ts-nocheck

export function parseFormData(): FormData {
  let elements: NodeListOf<Element> = document.querySelectorAll('form *');
  let data: {} = {};
  elements.forEach((element: Element) => {
      let id: string | null = element.getAttribute('id');
      let name: string | null = element.getAttribute('name');
      let value: string | number | boolean | null = element.value;
      if (id) {
          if (data[id] !== undefined) {
              if (Array.isArray(data[id])) {
                  data[id].push(value);
              } else {
                  data[id] = [data[id], value];
              }
          } else {
              data[id] = value;
          }
      }
      if (name) {
          if (data[name] !== undefined) {
              if (Array.isArray(data[name])) {
                  data[name].push(value);
              } else {
                  data[name] = [data[name], value];
              }
          } else {
              data[name] = value;
          }
      }
  });
  return data;
}