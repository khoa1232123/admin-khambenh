const renderOptions = (options) => {
  const data = [];
  data.push(
    <option value="" key="1">
      -- Select Options --
    </option>
  );

  for (const item of options) {
    data.push(
      <option value={item._id} key={item._id}>{`${item.mso} - ${
        item.msobn ? item.msobn : ""
      } ${item.ten}`}</option>
    );
  }

  return data;
};

const convertPhieukham = (phieukham) => {
  const data = [];
  // eslint-disable-next-line array-callback-return
  phieukham.map((item, index) => {
    data.push({
      _id: item._id,
      mso: item.mso,
      msobn: item.hosobenhnhan.mso,
      ten: item.hosobenhnhan.ten,
    });
  });
  return data;
};

export { renderOptions, convertPhieukham };
