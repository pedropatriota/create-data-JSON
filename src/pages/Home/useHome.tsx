import { FormEvent, useState } from "react";
import { initialFormData } from "../../utils";
import type { IFormData, IFormFactory, Item } from "../../utils/contracts";

const useHome = () => {
  const [formData, setFormData] = useState<IFormData>(initialFormData);
  const [dataJSON, setDataJSON] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    formItem: IFormFactory
  ) => {
    const { name, value } = e.target;
    if (!/^\d*(\.\d*)?$/.test(value)) {
      return;
    }
    const fieldName = formItem?.name;
    const fieldsLength = formItem?.fields?.length as number;
    const index = fieldsLength / fieldsLength - 1;

    setFormData((prevFormData) => {
      if (Array.isArray(formItem?.fields) && !!fieldName) {
        const updated = prevFormData[fieldName as keyof IFormData];

        updated[index] = { ...updated[index], [name]: value };

        return {
          ...prevFormData,
          [fieldName]: updated,
        };
      } else {
        return prevFormData;
      }
    });
  };

  const handleSelectChange = (newValue: unknown, field: string) => {
    setFormData({
      ...formData,
      [field]: newValue,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const addresses = formData?.addresses.map(({ latitude, longitude }) => {
      return {
        coordinates: {
          latitude: parseFloat(latitude as string),
          longitude: parseFloat(longitude as string),
        },
      };
    });

    const jsonData = {
      trainingData: [
        {
          addresses: [...addresses],
          bandwidths: [...formData.bandWidth]?.map((item) => ({
            download: parseFloat(item.download as string),
            upload: parseFloat(item.upload as string),
          })),
          distanceClasses: [...formData.distanceClasses]?.map(
            (item) => item.value
          ),
          technologyTypes: [...formData.technologyTypes]?.map(
            (item) => item.value
          ),
          connectionTypes: [...formData.connectionTypes]?.map(
            (item) => item.value
          ),
          networks: [...formData.networks]?.map((item) => item.value),
          contractTerms: [...formData.contractTerms]?.map((item) => item.value),
          areaCodes: [...formData.areaCodes]?.map((item) => item.value),
        },
      ],
    };

    setDataJSON(JSON.stringify(jsonData, null, 2));
    setFormData(initialFormData);
  };

  const getFieldValue = (formItem: IFormFactory, index: number) => {
    if (formItem?.fields?.length) {
      const fieldName = formItem?.fields?.map((field) => field.name)[index];
      const value = formData?.[fieldName as keyof IFormData];

      return value;
    }
    const fieldName = formItem?.name as string;
    const values = formData?.[fieldName as keyof IFormData];

    return values?.map((value) => value);
  };

  return {
    handleSubmit,
    formData,
    handleSelectChange,
    handleChange,
    getFieldValue,
    dataJSON,
  };
};

export default useHome;
