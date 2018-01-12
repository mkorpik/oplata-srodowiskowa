<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * MobileData
 * @ApiResource(attributes={"filters"={"cauldronData.search_filter"}})
 * @ORM\Table(name="cauldron_data"))
 * @ORM\Entity
 */
class CauldronData
{

    /**
     * @var integer
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     */
    private $id;

    /**
     * @var float
     *
     * @ORM\Column(name="expend", type="float", precision=10, scale=0, nullable=true)
     */
    private $expend;


    /**
     * @var integer
     *
     * @ORM\Column(name="cauldron_kind_id", type="integer", nullable=true)
     */
    private $cauldronKindId;

    /**
     * @var integer
     * @ORM\Column(name="cauldron_id", type="integer", nullable=true)
     */
    private $cauldronId;

    /**
     * @var integer
     * @ORM\Column(name="period_id", type="integer", nullable=true)
     */
    private $periodId;

    /**
     * @var integer
     * @ORM\Column(name="company_id", type="integer", nullable=true)
     */
    private $companyId;

    /**
     * @var integer
     * @ORM\Column(name="commune_id", type="integer", nullable=true)
     */
    private $commmuneId;

    /**
     * @var float
     *
     * @ORM\Column(name="fee", type="float", precision=10, scale=0, nullable=true)
     */
    private $fee;

    /**
     * @var float
     *
     * @ORM\Column(name="cauldron_fee", type="float", precision=10, scale=0, nullable=true)
     */
    private $cauldronFee;

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return float
     */
    public function getExpend()
    {
        return $this->expend;
    }

    /**
     * @param float $expend
     */
    public function setExpend($expend)
    {
        $this->expend = $expend;
    }

    /**
     * @return int
     */
    public function getCauldronKindId()
    {
        return $this->cauldronKindId;
    }

    /**
     * @param int $cauldronKindId
     */
    public function setCauldronKindId($cauldronKindId)
    {
        $this->cauldronKindId = $cauldronKindId;
    }

    /**
     * @return int
     */
    public function getCauldronId()
    {
        return $this->cauldronId;
    }

    /**
     * @param int $cauldronId
     */
    public function setCauldronId($cauldronId)
    {
        $this->cauldronId = $cauldronId;
    }

    /**
     * @return int
     */
    public function getPeriodId()
    {
        return $this->periodId;
    }

    /**
     * @param int $periodId
     */
    public function setPeriodId($periodId)
    {
        $this->periodId = $periodId;
    }

    /**
     * @return int
     */
    public function getCompanyId()
    {
        return $this->companyId;
    }

    /**
     * @param int $companyId
     */
    public function setCompanyId($companyId)
    {
        $this->companyId = $companyId;
    }

    /**
     * @return float
     */
    public function getFee()
    {
        return $this->fee;
    }

    /**
     * @param float $fee
     */
    public function setFee($fee)
    {
        $this->fee = $fee;
    }

    /**
     * @return float
     */
    public function getCauldronFee()
    {
        return $this->cauldronFee;
    }

    /**
     * @param float $cauldronFee
     */
    public function setCauldronFee($cauldronFee)
    {
        $this->cauldronFee = $cauldronFee;
    }

    /**
     * @return int
     */
    public function getCommmuneId()
    {
        return $this->commmuneId;
    }

    /**
     * @param int $commmuneId
     */
    public function setCommmuneId($commmuneId)
    {
        $this->commmuneId = $commmuneId;
    }


}

